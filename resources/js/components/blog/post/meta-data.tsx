import { Post } from '@/types/post';
import { Head } from '@inertiajs/react';

type Props = {
    post: Post;
};

export default function MetaData({ post }: Props) {
    return (
        <Head>
            <title>{post.title}</title>
            <meta name="description" content={post.description} />
            <meta name="keywords" content={post.tags.map((tag) => tag.name).join(', ')} />
            <meta name="author" content={post.author.name} />
            <meta name="robots" content="index, follow" />
            <meta property="og:locale" content={localStorage.getItem('lang') ?? 'en'} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={post.title} />
            <meta property="og:description" content={post.description} />
            <meta property="og:url" content={window.location.href} />
            <meta property="og:image" content={`https://loslc.tech/storage/${post.image}`} />
            <meta property="og:image:secure_url" content={`https://loslc.tech/storage/${post.image}`} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="628" />
            <meta property="og:site_name" content="LOSLC" />
            <meta property="og:updated_time" content="2025-05-07T18:15:46+02:00" />
            <meta property="article:publisher" content="https://www.facebook.com/blogdumoderateur" />
            <meta property="article:tag" content={post.tags.map((tag) => tag.name).join(', ')} />
            <meta property="article:section" content={post.category.name} />
            <meta property="article:published_time" content={post.created_at} />
            <meta property="article:modified_time" content={post.updated_at} />
            <meta name="twitter:description" content={post.description} />
            <meta name="twitter:title" content={post.title} />
            <meta name="apple-mobile-web-app-title" content="LOSLC" />
            <meta name="application-name" content="LOSLC" />
            <link rel="canonical" href={window.location.href} />
            <link rel="dns-prefetch" href="//www.loslc.tech" />
        </Head>
    );
}
