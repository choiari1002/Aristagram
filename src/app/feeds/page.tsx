import { makeServerClient } from "@/utils/supabaseServerClient.utils";
import { redirect } from "next/navigation";
import { Button } from "@mantine/core";
import Link from "next/link";
import { Feeds } from "./feeds.component";

const FeedsPage = async () => {
  const supabase = makeServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return redirect("/auth/signin");

  return (
    <>
      <Link href="/upload">
        <Button variant="transparent" color="black" mt="sm">
          새로운 피드 업로드 하기
        </Button>
      </Link>
      <Feeds myUserId={user.id}/>
    </>
  );
};

export default FeedsPage;
