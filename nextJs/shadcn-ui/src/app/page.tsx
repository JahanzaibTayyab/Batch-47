import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, Mail, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ProfileModal from "@/components/ProfileModal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href={"/todo"} className="text-xl font-bold text-blue/500">
        Todo App
      </Link>
      <div>Hello i am shadcn UI</div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Taxing Laughter: The Joke Tax Chronicles
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </p>
      <div className="flex gap-5">
        <Button>Primary</Button>
        <Button variant="secondary">Second</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
        <Button>
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      </div>
      <div className="mt-6 space-y-5">
        <Input placeholder="Email" />
        <div>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email with label" />
        </div>
        <ProfileModal />
      </div>
    </main>
  );
}
