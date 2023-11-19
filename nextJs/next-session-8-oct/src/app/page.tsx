import Button from "@/components/Button";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
      <h1>Hello from Nexjs</h1>
      <h1 className="font-bold text-6xl text-red-500">
        Hello Next Js 1st Lecture
      </h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure
      </p>
      <Button />
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia,
        <Button />
      </div>
    </main>
  );
}
