import { redirect } from "next/navigation";
import { Card, MultiSelect, TextInput, Button } from "@mantine/core";
import { makeServerClient } from "@/utils/supabaseServerClient.utils";
import Link from "next/link";

const ChatRoomListComponent = async () => {
  const supabase = makeServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return redirect("/auth/signin");

  const { data: uData } = await supabase.from("users").select().neq("id", user.id);
  const multiSelectOptions = (uData || []).map((u) => {
    return { value: u.id, label: u.username };
  });

  // 이렇게 몇단계씩 하는게 아니라..
  //   const {} = await supabase.from("chat_room_users").select().eq("user_id", user.id);
  //   await supabase.from("chat_rooms").select().in("id")

  const { data: cruData } = await supabase
    .from("chat_room_users")
    .select("*, chat_rooms(name)")
    .eq("user_id", user.id);
  //   console.log(cruData);

  const chatRoomList = (cruData || []).map((cru) => {
    // 프라이머리고 널러블이 아니기 때문에 데이터베이스에서.. 그러니까 믿으라고 ! 써준거.
    return { chatRoomId: cru.chat_room_id, cahtRoomName: cru.chat_rooms!.name };
  });

  const createChatRoom = async (formData) => {
    "use server";
    const userIdListString = formData.get("userIds");
    if (!userIdListString) return;

    const userIds = userIdListString.split(",");
    userIds.push(user.id);

    const chatRoomName = (formData.get("chatRoomName") as string) || "채팅방";

    const supabase = makeServerClient();
    const { data: crData, error: crError } = await supabase
      .from("chat_rooms")
      .insert({ name: chatRoomName })
      .select()
      .single();
    if (crError) return;

    await supabase.from("chat_room_users").insert(
      userIds.map((userId) => {
        return { user_id: userId, chat_room_id: crData.id };
      }),
    );

    redirect(`chat/${crData.id}`);
  };

  return (
    <div>
      <Card shadow="md" style={{ width: 300 }}>
        {chatRoomList.map((chatRoom) => {
          return (
            <Button
              variant={"subtle"}
              key={chatRoom.chatRoomId}
              component={Link}
              href={`/chat/${chatRoom.chatRoomId}`}
            >
              {chatRoom.cahtRoomName}
            </Button>
          );
        })}
      </Card>
      <Card shadow="md" style={{ width: 300 }}>
        <form action={createChatRoom}>
          <MultiSelect
            label={"채팅할 친구들을 선택하세요."}
            data={multiSelectOptions}
            name={"userIds"}
          ></MultiSelect>
          <TextInput label={"채팅방 이름"} name={"chatRoomName"}></TextInput>
          <Button mt={"sm"} type={"submit"}>
            채팅방 만들기
          </Button>
        </form>
      </Card>
    </div>
  );
};

ChatRoomListComponent.displayName = "ChatRoomList";

export const ChatRoomList = ChatRoomListComponent;
