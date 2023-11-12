import Link from "next/link";

const NewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5 bg-yellow-900  py-2 px-2">
        <Link href={"/new"}>New</Link>
        <Link href={"/new2"}>New 2</Link>
      </div>
      {children}
    </div>
  );
};
export default NewLayout;
