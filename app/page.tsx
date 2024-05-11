import { ModeToggle } from "@/components/ui/mode-toogle";
import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/ui/site-footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden  py-6 sm:py-12">
      <div className="relative pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="flex space-x-3">
        <Button variant="outline" className=" bg-green-600">Hello</Button>
          <ModeToggle />
          </div>
      </div>
    </div>
  );
}
