import { blogData } from "@/utils/data";
import Link from "next/link";

const Blog = () => {
  return (
    <div className="text-2xl">
      This is Blog Page
      <div className="flex gap-5 py-2">
        <Link href={`/blog/${1}`}>id:1 </Link>
        <Link href={`/blog/${2}`}>id:2 </Link>
        <Link href={`/blog/${3}`}>id:3 </Link>
        <Link href={`/blog/${4}`}>id:4 </Link>
        {/* {blogData.map((blog, index) => {
          return (
            <Link
              href={`/blog/${blog.id}`}
              key={index}
              className="font-bold text-sm"
            >
              Id:{blog.id}
            </Link>
          );
        })} */}
      </div>
    </div>
  );
};

export default Blog;
