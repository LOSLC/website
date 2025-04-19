import { useAppearance } from "@/hooks/use-appearance";
import { Moon, Sun } from "lucide-react";
import { Button } from "../button";

export default function ThemeSwitch() {
  const { appearance, updateAppearance } = useAppearance();
  return (
    <>
      <Button
        variant={"ghost"}
        className="rounded-full w-10 h-10"
        onClick={() => {
          updateAppearance(appearance === "light" ? "dark" : "light");
        }}
      >
        {appearance === "dark" ? <Sun className="motion-preset-wiggle" /> : <Moon className="motion-preset-wiggle"/>}
      </Button>
    </>
  );
}
