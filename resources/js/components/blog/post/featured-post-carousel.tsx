import { Post } from '@/types/post';
import FeaturedPost from './featured-post';

export default function FeaturedPostCarousel({ posts }: { posts: Post[] }) {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row md:gap-8">
            {posts.map((post, index) => {
                return <FeaturedPost post={post} key={index} />;
            })}
        </div>
    );
}
