import { blogData } from "@/utils/data";
export async function generateStaticParams() {
  return blogData.map((blog) => ({
    id: blog.id,
  }));
}

export default function Page({ params }: { params: { id: string } }) {
  return <div>My Post: {params.id}</div>;
}
