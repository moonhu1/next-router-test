import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow py-4">
      <div className="flex justify-center space-x-8">
        <Link
          href="/"
          className="text-gray-700 hover:text-blue-500 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/login"
          className="text-gray-700 hover:text-blue-500 transition-colors"
        >
          用户登录
        </Link>
        <Link
          href="/courses"
          className="text-gray-700 hover:text-blue-500 transition-colors"
        >
          课程列表
        </Link>

        <Link
          href="/blog"
          className="text-gray-700 hover:text-blue-500 transition-colors"
        >
          博客
        </Link>
      </div>
    </nav>
  );
}
