import Layout from "@/components/blog/layout";

export default function Home() {
  return (
    <Layout>
      <div className="relative bg-background flex-col w-full h-screen scroll-smooth">
        <div className="flex w-full min-h-[60vh] md:h-screen justify-center z-20 md:items-center backdrop-blur-2xl">
          <div className="w-10/12 sm:w-8/12 flex justify-center items-center py-16 md:py-0">
            <span className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-foreground motion-preset-slide-up text-center">
              A community for{" "}
              <span className="bg-clip-text text-transparent from-primary to-sky-400 bg-gradient-to-r">
                open-source
              </span>{" "}
              enthousiasts and{" "}
              <span className="bg-gradient-to-r bg-clip-text text-transparent from-yellow-800 to-yellow-400">
                Linux
              </span>{" "}
              lovers.
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
