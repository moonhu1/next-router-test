import Link from "next/link";
export default function CoursesPage() {
  const courses = [
    { id: 1, name: "next.js入门" },
    { id: 2, name: "react进阶" },
    { id: 3, name: "前端工程化" },
  ];
  return (
    <section>
      <h1>课程列表</h1>
      <ul>
        {courses.map((course) => (
          <li key={course.id}>
            <Link href={`/courses/${course.id}`}>{course.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
