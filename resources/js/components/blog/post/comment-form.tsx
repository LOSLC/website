import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { type SharedData } from '@/types';
import { Post as PostType } from '@/types/post';
import { useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function CommentForm({ post, parentId, onSuccess }: { post: PostType; parentId?: number; onSuccess?: () => void }) {
    const { auth } = usePage<SharedData>().props;
    const {
        data,
        setData,
        post: submit,
        processing,
        errors,
    } = useForm({
        comment: '',
        parent_id: parentId || null,
    });

    const handleCommentSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        submit(route('blog.comment', { post: post.id }), {
            preserveScroll: true,
            onSuccess: () => {
                setData('comment', '');
                onSuccess?.();
            },
        });
    };

    return (
        <form onSubmit={handleCommentSubmit} className="mt-2">
            <Textarea
                required
                value={data.comment}
                onChange={(e) => setData('comment', e.target.value)}
                placeholder={auth.user ? '' : 'You must be logged in to comment.'}
                disabled={!auth.user}
                name="comment"
                className="mb-2"
            />
            {errors.comment && <div className="mb-2 text-sm text-red-500">{errors.comment}</div>}
            <Button type="submit" disabled={processing || !auth.user} size="sm" className="cursorr-pointer">
                Post
            </Button>
        </form>
    );
}
