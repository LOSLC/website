import { Link } from '@/components/blog/navigation/link';
import Navbar from '@/components/blog/navigation/nav';
import Paginator from '@/components/blog/navigation/pagination';
import FeaturedPostCarousel from '@/components/blog/post/featured-post-carousel';
import { Props } from '@/types/post';

export default function BlogPage(props: Props) {
    const navLinks: Link[] = [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'Blog',
            href: '/blog',
        },
        {
            name: 'Store',
            href: '/store',
        },
        {
            name: 'About',
            href: '/about',
        },
    ];
    return (
        <div>
            <Navbar links={navLinks} />
            <div className="flex flex-col px-24 pt-4">
                <span className="mb-6 text-xl sm:text-2xl md:text-3xl">Featured Posts</span>
                <FeaturedPostCarousel posts={props.posts} />
            </div>
            <Paginator pagination={props.pagination} />
        </div>
    );
}
