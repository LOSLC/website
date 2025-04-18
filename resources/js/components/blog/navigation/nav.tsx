import { Button, buttonVariants } from "@/components/ui/button";
import { Link } from "./link";
import ThemeSwitch from "@/components/ui/theming/theme-switch";

export default function Navbar({ links }: { links?: Link[] }) {
  return (
    <div className="relative">
      <nav className="h-[100px] flex px-8 items-center justify-between sticky border-b border-b-border">
        <span
          className="text-2xl uppercase cursor-default font-bold"
          onClick={() => window.open("http://localhost:8000")}
        >
          loslc
        </span>
        <div className="flex justify-center gap-6 h-full items-center invisible sm:visible w-1/2">
          {links?.map((link, index) => {
            return (
              <div className="flex gap-2 items-center">
                {link.icon}
                <a href={link.href} key={index}>
                  {link.name}
                </a>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <ThemeSwitch />
          <a
            href="/login"
            className={`rounded-none uppercase ${buttonVariants({ variant: "default" })}`}
          >
            Login
          </a>
        </div>
      </nav>
    </div>
  );
}
