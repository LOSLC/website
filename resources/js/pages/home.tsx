import Spotlight from '@/components/effects/spotlight';
import Footer from '@/components/footer';
import HomeHeader from '@/components/home/home-top';
import LandingBody from '@/components/home/landing-body';
import Layout from '@/layouts/layout';
import { Head } from '@inertiajs/react';

export default function Home() {
  return (
    <Layout>
      <Head title="Home" />
      <div className="bg-background relative h-screen w-full flex-col scroll-smooth">
        <Spotlight />
        <HomeHeader />
        <LandingBody />
        <Footer />
      </div>
    </Layout>
  );
}
