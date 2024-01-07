import React from "react";

const getBlogData = async (id: number) => {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );
  if (!res.ok) {
    throw new Error("Could not retrieve blog posts");
  }
  return await res.json();
};
async function BlogDetail({ params }: any) {
  const { blog } = await getBlogData(params.id);

  return (
    <div className="p-24 flex flex-col gap-1 flex-wrap">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        {blog.title}
      </h1>
      <p>{blog.description}</p>
      <p>{`${blog.content_text}`}</p>
    </div>
  );
}

export default BlogDetail;
