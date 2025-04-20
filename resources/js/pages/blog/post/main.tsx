import Layout from '@/components/blog/layout';
import PostContent from '@/components/blog/post/post-content';
import { Badge } from '@/components/ui/badge';
import { BreadcrumbItem } from '@/types';
import { Props, Tag as TagType } from '@/types/post';
import { Head } from '@inertiajs/react';
import { Heart, Tag } from 'lucide-react';
import CommentForm from './comment-form';
import CommentsContainer from './comments-container';

export default function PostPage(props: Props) {
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
                        {/* Post primary content */}
                        <section>
                            <h1 className="my-4 text-center text-3xl font-bold"> {props.post.title} </h1>
                            {props.post.image && <img src={`/storage/${props.post.image}`} alt={props.post.title} className="mb-4 w-full rounded" />}
                            <PostContent content={props.post.content} />
                        </section>

                        {/* Post secondary content */}
                        <section className="mt-10">
                            <div className="flex justify-between">
                                {/* Tags */}
                                <div className="my-4 flex items-center gap-2">
                                    <h3 className="flex items-center gap-2 text-lg font-bold">
                                        <Tag className="text-primary" /> Tags:
                                    </h3>
                                    <Tags tags={props.post.tags} />
                                </div>
                                {/* Likes */}
                                <div className="flex items-center gap-2">
                                    <Heart /> {props.post.likesCount}
                                </div>
                            </div>
                            <div className="mt-4 border-t">
                                <h3 className="my-4 text-lg font-bold">
                                    {props.post.commentsCount} Comment{props.post.commentsCount > 1 ? 's' : ''}
                                </h3>
                                <CommentForm props={props} />
                                <CommentsContainer comments={props.comments} />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

function Tags({ tags }: { tags: TagType[] }) {
    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <Badge key={tag.id} variant="secondary" className="cursor-pointer">
                    {tag.name}
                </Badge>
            ))}
        </div>
    );
}
