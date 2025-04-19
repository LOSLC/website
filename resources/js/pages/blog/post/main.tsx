import Layout from '@/components/blog/layout';
import PostContent from '@/components/blog/post/post-content';
import { Badge } from '@/components/ui/badge';
import { BreadcrumbItem } from '@/types';
import { Props } from '@/types/post';
import { Head } from '@inertiajs/react';
import { Eye, Heart, Tag } from 'lucide-react';

export default function postPage(props: Props) {
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Blog',
            href: '/blog',
        },
        {
            title: props.post.title.substring(0, 50) + '...',
            href: '',
        },
    ];
    return (
        <Layout breadcrumbs={breadcrumbs}>
            <Head title={props.post.title} />
            <div className="flex items-center justify-center">
                <div className="max-w-4xl">
                    <div>
                        <h1 className="mb-2 mb-4 text-center text-2xl font-bold"> {props.post.title} </h1>
                        {props.post.image && <img src={`/storage/${props.post.image}`} alt={props.post.title} className="mb-4 w-full" />}
                        <PostContent content={props.post.content} />
                        <div className="flex justify-between">
                            <span className="flex items-center gap-2">
                                <Heart />
                                {props.post.likesCount}
                            </span>
                            <span className="flex items-center gap-2">
                                <Eye />
                                {props.post.views}
                            </span>
                        </div>
                        <div className="my-4">
                            <h3 className="text-primary flex items-center gap-2 text-lg font-bold">
                                <Tag />
                                Tags:
                            </h3>
                            <div>
                                {props.tags.map((tag) => (
                                    <Badge variant={'outline'} key={tag.id} className="">
                                        {tag.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3>Comments: {props.post.commentsCount}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
