export default function HomeTitle() {
  return (
    <div className="w-10/12 sm:w-8/12 flex justify-center items-center py-16 md:py-0">
      <span className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-foreground motion-preset-slide-up">
        LOSLC,{" "}
        <span className="bg-clip-text text-transparent from-primary to-sky-400 bg-gradient-to-r">
          Linux
        </span>{" "}
        and{" "}
        <span className="bg-gradient-to-r bg-clip-text text-transparent from-yellow-800 to-yellow-400 text-nowrap">
          Open Source
        </span>{" "}
        lovers community
      </span>
    </div>
  );
}
