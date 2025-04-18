import { useAppearance } from "@/hooks/use-appearance";
import { Button } from "../button";
import { Moon, Sun } from "lucide-react";

export default function ThemeSwitch() {
  const { appearance, updateAppearance } = useAppearance();
  return (
    <>
      <Button
        variant={"ghost"}
        className="rounded-none"
        onClick={() => {
          appearance === "light"
            ? updateAppearance("dark")
            : updateAppearance("light");
        }}
      >
        {appearance === "dark" ? <Sun /> : <Moon />}
      </Button>
    </>
  );
}
