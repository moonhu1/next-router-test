import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
interface PageProps {
  params: { slug: string[] };
}

export default async function NestedPostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugPath = slug.join("/");

  const postPath = path.join(
    process.cwd(),
    "app",
    "blog",
    "posts",
    `${slugPath}.md`
  );

  if (!fs.existsSync(postPath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { data, content } = matter(fileContent);

  //把markdown转为react组件
  const MDXSource = await serialize(content);

  return (
    <section>
      <h1>{data.title}</h1>
      <MDXRemote source={content} />
    </section>
  );
}
