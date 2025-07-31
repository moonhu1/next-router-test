"use client";
import { useRouter } from "next/navigation";

export default function login() {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push("/profile");
  };
  return (
    <section>
      <h1>用户登录</h1>
      <input type="text" placeholder="用户名"></input>
      <input type="password" placeholder="密码"></input>
      <button onClick={handleLoginClick}>登录</button>
    </section>
  );
}
