import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <Link href="/"> 11Home </Link>
      <Link href="/courses"> 课程列表 </Link>
      <Link href="/login"> 用户登录 </Link>
      <Link href="/blog"> 博客 </Link>
    </nav>
  );
}
