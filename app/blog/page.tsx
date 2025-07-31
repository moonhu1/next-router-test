import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface PostMeta {
  slug: string;
  title: string;
  isNested: boolean;
}

function getPosts(): PostMeta[] {
  const postsDir = path.join(process.cwd(), "app", "blog", "posts");

  const scan = (dir: string, baseSlug = "", nested = false): PostMeta[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    return entries.flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return scan(fullPath, `${baseSlug}/${entry.name}`, true);
      } else if (entry.name.endsWith(".md")) {
        const slug = entry.name.replace(/\.md$/, "");
        const file = fs.readFileSync(fullPath, "utf-8");
        const { data } = matter(file);
        return [
          {
            slug: nested ? `${baseSlug}/${slug}` : slug,
            title: data.title || slug,
            isNested: nested,
          },
        ];
      }
      return [];
    });
  };

  return scan(postsDir);
}

export default function BlogPage() {
  const posts = getPosts();

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">博客文章列表</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="text-blue-600 hover:underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
