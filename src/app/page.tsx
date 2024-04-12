import { redirect } from "next/navigation";
import { makeServerClient } from "@/utils/supabaseServerClient.utils";
import { ChatRoomList } from "./(chatting)/chatRoomList";

const HomePage = async () => {
  const supabase = makeServerClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (session) {
    return <ChatRoomList />
  }

  redirect("/auth/signin");
};

export default HomePage;
