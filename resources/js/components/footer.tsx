import LangSelect from '@/components/language/lang-select';

export default function Footer() {
  return (
    <footer className="bottom-0 flex min-h-[150px] items-center justify-center gap-10">
      <div className="info text-foreground/60 flex flex-col justify-center">Copyright LOSLC &copy; {new Date().getFullYear()}</div>
      <div className="controls flex flex-col justify-center">
        <LangSelect />
      </div>
    </footer>
  );
}
