import { Post } from '@/types/post';
import PostComponent from './post';

export default function PostsContainer({ posts }: { posts: Post[] }) {
    return (
        <div className="items-start gap-6 md:grid lg:grid-cols-2 xl:grid-cols-3">
            {posts.map((post, index) => {
                return <PostComponent post={post} key={index} />;
            })}
        </div>
    );
}
