import Layout from '@/components/blog/layout';
import PostContent from '@/components/blog/post/post-content';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BreadcrumbItem } from '@/types';
import { Props, Tag as TagType } from '@/types/post';
import { Head, useForm } from '@inertiajs/react';
import { Heart, Tag } from 'lucide-react';
import { FormEventHandler } from 'react';
import CommentForm from '../../../components/blog/post/comment-form';
import CommentsContainer from '../../../components/blog/post/comments-container';

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
                                        <Tag /> Tags:
                                    </h3>
                                    <Tags tags={props.post.tags} />
                                </div>
                                {/* Likes */}
                                <div>
                                    <LikeBtn props={props} />
                                </div>
                            </div>
                            <div className="mt-4 border-t">
                                <h3 className="my-4 text-lg font-bold">
                                    {props.post.commentsCount} Comment{props.post.commentsCount > 1 ? 's' : ''}
                                </h3>
                                <CommentForm post={props.post} />
                                <CommentsContainer comments={props.comments} post={props.post} />
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

function LikeBtn({ props }: { props: Props }) {
    const isLiked = props.post.isLiked;
    const { data, post: submit, processing } = useForm({ isLiked: !props.post.isLiked });

    const handleLikeSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        submit(route('blog.like', { post: props.post.id }), { preserveScroll: true });
    };

    return (
        <form method="post">
            <input type="hidden" name="isLiked" value={data.isLiked.toString()} />
            <Button
                variant={isLiked ? 'default' : 'secondary'}
                className="cursor-pointer rounded-full"
                onClick={handleLikeSubmit}
                disabled={processing}
            >
                <Heart /> {props.post.likesCount}
            </Button>
        </form>
    );
}
