"use client";

import {
  PropsWithChildren,
  useRef,
  FC,
  FormEventHandler,
  useState,
  useEffect,
  useLayoutEffect,
} from "react";
import styles from "./chatBox.module.scss";

import { Button, Card, TextInput } from "@mantine/core";
import { makeBrowserClient } from "@/utils/supabaseBrowserClient.utils";
import { Database } from "@/supabase.types";

type ChatBoxProps = {
  chatRoomId: string;
  chatMessages: {
    id: number;
    body: string;
    sentById: string;
    sentByUsername: string;
  }[];
  myUserId: string;
  userMap: Record<string, string>;
};

const ChatBoxComponent: FC<PropsWithChildren<ChatBoxProps>> = ({
  chatRoomId,
  chatMessages: initChatMessages,
  myUserId,
  userMap,
}) => {
  const messageContainerElementRef = useRef<HTMLDivElement>(null);
  const chatMessageElementRef = useRef<HTMLInputElement>(null);
  const supabase = makeBrowserClient();
  const [chatMessages, setChatMessages] = useState(initChatMessages);

  // 페이지 랜더링과 subscribe 사이에 다른 체팅이 있다면..
  // 채팅 메세지의 누락을 막기 위해서 몇가지의 protections 이 필요
  // 간극을 줄이기 위한 방법 -> subscribe 를 하고 chat msg 요청하기 등등이 있을 수 있다.
  useEffect(() => {
    const channel = supabase
      .channel("chat")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "chat_messages",
          filter: `chat_room_id=eq.${chatRoomId}`,
        },
        (payload) => {
          const newMessage = payload.new as Database["public"]["Tables"]["chat_messages"]["Row"];

          setChatMessages((prevMessages) => {
            return [
              ...prevMessages,
              {
                id: newMessage.id,
                body: newMessage.body,
                sentById: newMessage.created_by,
                sentByUsername: userMap[newMessage.created_by] || "unknown",
              },
            ];
          });
          console.log(newMessage);
        },
      )
      .subscribe();

    return () => {
      channel.unsubscribe();
    };
  }, [chatRoomId, supabase, userMap]);

  useLayoutEffect(() => {
    if (messageContainerElementRef.current) {
      messageContainerElementRef.current.scrollTop =
        messageContainerElementRef.current.scrollHeight;
    }
  });

  const sendMessage: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const message = chatMessageElementRef.current!.value.trim();

    // supabase
    await supabase.from("chat_messages").insert({
      chat_room_id: chatRoomId,
      body: message,
    });

    // after sending msg
    chatMessageElementRef.current!.value = "";
  };
  return (
    <Card shadow={"sm"} className={styles.chatBox}>
      <div ref={messageContainerElementRef} className="message-container">
        {chatMessages.map((chat) => {
          return (
            <div key={chat.id} className={`chat ${chat.sentById === myUserId ? "self" : ""}`}>
              <div className="chat-username">{chat.sentByUsername}</div>
              <div className="chat-message">{chat.body}</div>
            </div>
          );
        })}
      </div>
      <div className="new-message-container">
        <form onSubmit={sendMessage}>
          <TextInput ref={chatMessageElementRef} />
          <Button type={"submit"}>Send</Button>
        </form>
      </div>
    </Card>
  );
};
ChatBoxComponent.displayName = "ChatBox";

export const ChatBox = ChatBoxComponent;
