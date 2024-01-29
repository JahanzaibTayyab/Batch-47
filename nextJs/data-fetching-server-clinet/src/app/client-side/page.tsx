"use client";

import React, { useEffect, useState } from "react";

function ClientSide() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Fetch blogs data from the server using the `client.fetch` function provided by
    DataFetch();
  }, []);

  const DataFetch = async () => {
    setLoading(true);
    try {
      const blogs = await getBlogs();
      setBlogs(blogs.blogs);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
    }
  };

  const getBlogs = async () => {
    const res = await fetch(
      "https://api.slingacademy.com/v1/sample-data/blog-posts?offset=0&limit=50"
    );
    if (!res.ok) {
      throw new Error("Could not retrieve blog posts");
    }
    return await res.json();
  };

  return (
    <div>
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="flex gap-5 flex-wrap p-10">
          {blogs?.map((blog: any) => (
            <div key={blog.id} className="border p-3 ">
              <h1>{blog.title}</h1>
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ClientSide;
