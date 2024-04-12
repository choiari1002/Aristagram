import { PropsWithChildren, useRef, FC } from "react";
import { createBrowserClient, createServerClient } from "@supabase/ssr";
import { Button, Card, Image, Text, Input, TextInput, PasswordInput } from "@mantine/core";

type SignUpFromProps = {};

const SignUpFormComponent = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );

  const signUp = async (event) => {
    event.preventDefault();

    const email = emailRef.current!.value.trim();
    const fullname = fullNameRef.current!.value.trim();
    const username = usernameRef.current!.value.trim();
    const password = passwordRef.current!.value.trim();

    const { data, error }: { data: any; error: any } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: "http://localhost:3000/api/auth",
      },
    });

    if (error) {
      throw error;
    }

    console.log("Sign up successful:", data);

    // 회원가입 성공 후 users 테이블에 사용자 추가
    const { error: insertError } = await supabase
      .from("users")
      .insert({ id: data.user.id, fullname: fullname, username: username });

    if (insertError) {
      console.log(data.user.id);
      throw insertError;
    }

    console.log("User added to users table");
  };

  return (
    <form>
      <TextInput placeholder="Mobile number or email" mt="md" ref={emailRef} />
      <TextInput placeholder="Full name" mt="xs" ref={fullNameRef} />
      <TextInput placeholder="Username" mt="xs" ref={usernameRef} />
      <PasswordInput placeholder="Password" mt="xs" ref={passwordRef} />
      <Button fullWidth mt="md" onClick={signUp}>
        Sign up
      </Button>
    </form>
  );
};
SignUpFormComponent.displayName = "SignUpForm";

export const SignUpForm = SignUpFormComponent;
