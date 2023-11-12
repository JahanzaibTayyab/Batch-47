import Link from "next/link";

const NewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-5">
      <div className="flex flex-col gap-5 bg-yellow-500  py-2 px-2">
        <Link href={"/new/nested_2"}>Nested Route</Link>
        <Link href={"/new/nested_3"}>Nested Route1</Link>
        <Link href={"/new/nested_2"}>Nested Route2</Link>
      </div>
      {children}
    </div>
  );
};
export default NewLayout;
