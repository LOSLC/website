import Layout from '@/components/blog/layout';
import Hero from '@/components/home/hero';
import { Head } from '@inertiajs/react';
import HomeHeader from './header';

export default function Home() {
    return (
        <Layout>
            <Head title="Home" />
            <div className="bg-background relative h-screen w-full flex-col scroll-smooth">
                <HomeHeader />
                <Hero />
            </div>
        </Layout>
    );
}
