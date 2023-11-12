import Link from "next/link";

const NewLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex gap-5">Nested Layout for route 3{children}</div>;
};
export default NewLayout;
