import LangSelect from "@/components/language/lang-select";

export default function Footer() {
  return (
    <footer className="flex bottom-0 min-h-[150px] items-center justify-center gap-10">
      <div className="info flex flex-col justify-center text-foreground/60">
        Copyright LOSLC © {new Date().getFullYear()}
      </div>
      <div className="controls flex flex-col justify-center">
        <LangSelect />
      </div>
    </footer>
  );
}
