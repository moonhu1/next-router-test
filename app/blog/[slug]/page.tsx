import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { serialize } from "next-mdx-remote/serialize";
interface PageProps {
  params: { slug: string };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // process.cwd() 真正的项目根目录和package.json的同级目录，不是app文件的根，拼出文件路径
  const postPath = path.join(
    process.cwd(),
    "app",
    "blog",
    "posts",
    `${slug}.md`
  );

  if (!fs.existsSync(postPath)) {
    notFound(); //检查路径是否存在，不存在就使用next内置方法自动渲染404页
  }

  //读取文件内容并解析
  const fileContent = fs.readFileSync(postPath, "utf-8");
  const { data, content } = matter(fileContent);

  //把markdown转为react组件
  const MDXSource = await serialize(content);

  console.log(slug, postPath, data, content);

  return (
    <section>
      <h1>{data.title}</h1>
      <MDXRemote source={content} />
    </section>
  );
}
