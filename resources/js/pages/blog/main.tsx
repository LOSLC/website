import { Props } from '@/types/post';
import { Head, Link, router } from '@inertiajs/react';

export default function BlogPage(props: Props) {
    console.log(props.posts);

    return (
        <>
            <Head title="Blog" />
            <div className="flex flex-wrap gap-4">
                {props.posts.map((post, index) => (
                    <div key={index} className="my-2 h-fit w-80 bg-gray-800 p-2">
                        {post.image && <img src={`/storage/${post.image}`} alt={post.title} className="h-40 w-full object-cover" />}
                        <h2 className="text-lg font-bold">{post.title}</h2>
                        <p> {post.description} </p>
                        <div className="flex justify-between">
                            <Link href={route('blog.show', { slug: post.slug, post: post.id })} className="bg-blue-700 p-1">
                                Lire
                            </Link>
                            <span>{post.views} vues</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-center gap-2">
                {props.pagination.links.map((link, index) => (
                    <button
                        key={index}
                        disabled={!link.url}
                        onClick={() => router.visit(link.url || '#')}
                        className={`px-4 py-2 ${
                            link.active ? 'bg-blue-700 text-white' : 'bg-gray-700 text-gray-300'
                        } ${!link.url ? 'cursor-not-allowed opacity-50' : ''}`}
                    >
                        {link.label.replace('&laquo;', '«').replace('&raquo;', '»')}
                    </button>
                ))}
            </div>
        </>
    );
}
