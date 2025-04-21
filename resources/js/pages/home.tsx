import Layout from "@/components/blog/layout";
import HomeHeader from "./header";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <Layout>
      <div className="relative bg-background flex-col w-full h-screen scroll-smooth">
        <HomeHeader />
        <Hero />
      </div>
    </Layout>
  );
}
