export default function Spotlight() {
  return (
    <div className="relative w-full flex">
      <div
        className="w-9 h-[400px] bg-[linear-gradient(145deg,rgba(155,155,155,0.7)_60%,rgba(0,0,0,0)_20%)]
      absolute rotate-[-45deg] top-[-150px] left-16 blur-xl
      "
      />
      <div
        className="w-9 h-[400px] bg-[linear-gradient(145deg,rgba(155,155,155,0.7)_60%,rgba(0,0,0,0)_20%)]
      absolute rotate-[-30deg] top-[-150px] left-[200px] blur-xl
      "
      />
    </div>
  );
}
