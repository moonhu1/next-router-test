interface CoursePageProps {
  params: { id: string };
}

export default function CourPage({ params }: CoursePageProps) {
  return (
    <section>
      <h1>课程详情--ID{params.id}</h1>
      <p>这里是课程{params.id}的课程介绍</p>
    </section>
  );
}
