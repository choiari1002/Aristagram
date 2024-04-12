import { makeServerClient } from "@/utils/supabaseServerClient.utils";
import { redirect } from "next/navigation";
import { UploadForm } from "./uploadForm.component";
import { Button } from "@mantine/core";
import Link from "next/link";

const UploadPage = async () => {
  const supabase = makeServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return redirect("/auth/signin");
  return (
    <>
      <Link href="/feeds">
        <Button variant="transparent" color="black" mt="sm">
          전체 피드 페이지로 가기
        </Button>
      </Link>
      <UploadForm userId={user.id} />
    </>
  );
};

export default UploadPage;
