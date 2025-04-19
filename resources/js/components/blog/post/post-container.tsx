import { Post } from '@/types/post';
import PostComponent from './post';

export default function PostsContainer({ posts }: { posts: Post[] }) {
    return (
        <div className="flex flex-col gap-6">
            {posts.map((post, index) => {
                return <PostComponent post={post} key={index} />;
            })}
        </div>
    );
}
