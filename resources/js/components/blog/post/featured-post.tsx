import { Post } from '@/types/post';
import { Link } from '@inertiajs/react';
import { Eye, Heart } from 'lucide-react';

export default function FeaturedPost({ post }: { post: Post }) {
    return (
        <article className="motion-preset-bounce mb-4 flex w-full max-w-4xl items-center justify-center">
            <Link
                href={route('blog.show', { slug: post.slug, post: post.id })}
                className="flex w-full cursor-default flex-col items-center justify-center gap-4"
            >
                <div className="w-full">
                    <img
                        className="h-50 w-full cursor-pointer object-cover"
                        src={post.image ? `/storage/${post.image}` : '/post-no-cover.png'}
                        alt={post.title}
                    />
                </div>
                <div className="flex w-full flex-col">
                    <h3 className="cursor-pointer text-2xl font-bold md:text-2xl">{post.title.substring(0, 30) + '...'}</h3>
                    <p className="mb-2 text-sm text-gray-500">{post.description.substring(0, 150) + '...'}</p>
                    <div className="flex justify-between">
                        <div className="flex gap-2">
                            <Heart />
                            <span>{post.likesCount}</span>
                        </div>
                        <div className="flex gap-2">
                            <Eye />
                            <span>{post.views}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </article>
    );
}
