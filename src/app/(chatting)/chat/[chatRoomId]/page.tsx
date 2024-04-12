import { makeServerClient } from "@/utils/supabaseServerClient.utils";
import { ChatBox } from "./chatBox";
import { redirect } from "next/navigation";

const ChatRoomPage = async ({ params: { chatRoomId } }: { params: { chatRoomId: string } }) => {
  const supabase = makeServerClient();
  // 단순 db가 아니다. db에다가 realtime 붙인 db.. 거기에 auth 도 있고.. 거기에 third-party provider 의 auth 도 해주는..
  // 거기에 rls 까지.. 그리고 storage(blob) 가 있고 edge function 이 있다. 그걸 다 해주는 서비스가 supabase 라이브러리다.
  // supabase.from 은 db에
  // supabase.auth 은 auth 에..
  // supabse.channel 은 realtime...
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return redirect("/auth/signin");

  // 데이터베이스의 row의 오더는 어떠한 의미도 가지면 안된다.
  // 오더링 해줘야 한다. 데이터 베이스는 ascending 이고 그 때 리밋을 걸면 가장 최신 30개 메세지가 아니라 가장 오래된 30개 메세지가 필터링 된다는게 두번째 이유
  const { data: cmData } = await supabase
    .from("chat_messages")
    .select("*, users(username)")
    .eq("chat_room_id", chatRoomId)
    .order("created_at", { ascending: false })
    .limit(30);

  // 우리는 체팅이고 최신 메시지가 아래에 와야하기 때문에 reverse() 써준다.
  const chatMessages = (cmData || [])
    .map((cm) => {
      return {
        id: cm.id,
        body: cm.body,
        sentById: cm.created_by,
        sentByUsername: cm.users!.username,
      };
    })
    .reverse();

  const { data: cruData } = await supabase
    .from("chat_room_users")
    .select("user_id, users(username)")
    .eq("chat_room_id", chatRoomId);

  // 1. 타입스크립트를 사용한 방식
  const userMap: { [userId: string]: string } = {};
  cruData?.forEach((cru) => {
    userMap[cru.user_id] = cru.users!.username;
  });

  // 2. reduce 쓰는 방법.
  // const userMap = cruData?.reduce<{ [userId: string]: string }>((acc, cru) => {
  //   acc[cru.user_id] = cru.users!.username;
  //   return acc;
  // }, {});

  console.log(userMap);

  return (
    <ChatBox
      chatRoomId={chatRoomId}
      chatMessages={chatMessages}
      myUserId={user.id}
      userMap={userMap}
    />
  );
};

export default ChatRoomPage;
