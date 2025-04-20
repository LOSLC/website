import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { type SharedData } from '@/types';
import { Props } from '@/types/post';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function CommentForm({ props }: { props: Props }) {
    const { auth } = usePage<SharedData>().props;
    const { setData, post, processing, errors } = useForm({ comment: '' });

    const handleCommentSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('blog.comment', { slug: props.post.slug, post: props.post.id }), {
            preserveScroll: true,
        });
    };

    return (
        <>
            <form onSubmit={handleCommentSubmit}>
                <Textarea
                    required
                    name="comment"
                    className="mb-2"
                    disabled={auth.user ? false : true}
                    onChange={(e) => setData('comment', e.target.value)}
                    placeholder={auth.user ? 'Write a comment...' : 'You must be logged in to comment'}
                />
                {errors.comment && <div className="font-medium text-red-500">{errors.comment}</div>}
                <Button type="submit" className="mt-2 cursor-pointer" variant={'default'} disabled={auth.user || processing ? false : true}>
                    Post
                </Button>
            </form>
        </>
    );
}
