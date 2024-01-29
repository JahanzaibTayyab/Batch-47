import React from "react";

const getBlogs = async () => {
  const res = await fetch(
    "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=50"
  );

  if (!res.ok) {
    throw new Error("Could not retrieve blog posts");
  }
  return await res.json();
};

async function ServerData() {
  const { blogs } = await getBlogs();

  return (
    <div>
      <div className="flex gap-5 flex-wrap p-10">
        {blogs?.map((blog: any) => (
          <div key={blog.id} className="border p-3 ">
            <h1>{blog.title}</h1>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServerData;
