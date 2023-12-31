import React from "react";
import Link from "next/link";

const getBlogs = async () => {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=5&limit=100"
  );
  if (!res.ok) {
    throw new Error("Could not retrieve blog posts");
  }
  return await res.json();
};

async function BlogsPage() {
  const blogs = await getBlogs();

  return (
    <div className="p-10 flex flex-col">
      {blogs.blogs.length > 0 ? (
        <div className="flex gap-5 flex-wrap">
          {blogs.blogs.map((post: any) => (
            <Link href={`${post.id}`} key={post.id}>
              <div className="border p-1">
                <div className="text-xl font-bold">{post.title}</div>
                <p>{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div>No Blog Found</div>
      )}
    </div>
  );
}

export default BlogsPage;
