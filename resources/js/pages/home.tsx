import Layout from "@/components/blog/layout";
import Hero from "@/components/home/hero";
import { Head } from "@inertiajs/react";
import HomeHeader from "./home-top";
import LandingBody from "./landing-body";
import Spotlight from "@/components/effects/spotlight";

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <div className="bg-background h-screen w-full flex-col scroll-smooth relative">
        <Spotlight />
        <HomeHeader />
        <Hero />
        <LandingBody />
      </div>
    </Layout>
  );
}
