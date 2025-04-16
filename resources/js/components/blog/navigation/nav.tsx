import { Link } from "./link";

export default function Navbar({ links }: { links?: Link[] }) {
  return (
    <div>
      <nav className="flex px-8">
        <span
          className="text-2xl uppercase cursor-default"
          onClick={() => window.open("http://localhost:8000")}
        >
          loslc
        </span>
      </nav>
    </div>
  );
}
