import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { type SharedData } from '@/types';
import { Comment as CommentType, Post as PostType } from '@/types/post';
import { router, usePage } from '@inertiajs/react';
import { ChevronDown, Reply, Trash2 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import CommentForm from './comment-form';

export default function CommentsContainer({ comments, post }: { comments: CommentType[]; post: PostType }) {
    return (
        <div className="mt-10">
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} post={post} />
            ))}
        </div>
    );
}

function Comment({ comment, post }: { comment: CommentType; post: PostType }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showReplyForm, setShowReplyForm] = useState(false);
    const [showReplies, setShowReplies] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);
    const [countdown, setCountdown] = useState(5);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const isAuthor = usePage<SharedData>().props.auth.user?.id === comment.author.id;

    const handleDeleteClick = () => {
        if (!isDeleting) {
            setIsDeleting(true);
            intervalRef.current = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(intervalRef.current!);
                        router.delete(route('blog.comment.delete', { comment: comment.id }), {
                            preserveScroll: true,
                            onFinish: () => {
                                setIsDeleting(false);
                                setCountdown(5);
                            },
                        });
                        return 5;
                    }
                    return prev - 1;
                });
            }, 1000);
        } else {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setIsDeleting(false);
            setCountdown(5);
        }
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, []);

    return (
        <div className="my-4 cursor-default" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div className="flex items-start gap-2">
                <div>
                    <img
                        src={comment.author.avatar_url ? `/storage/${comment.author.avatar_url}` : '/assets/img/user-profile.png'}
                        alt={comment.author.name}
                        className="h-8 w-8 rounded-full"
                    />
                </div>
                <Collapsible open={showReplies} onOpenChange={setShowReplies}>
                    <div>
                        <div className="flex items-center gap-1">
                            <h4 className="font-medium">{comment.author.name}</h4>
                            <span>·</span>
                            <span className="text-muted-foreground text-sm">{comment.createdAt}</span>
                            {(isHovered || isDeleting) && (
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setShowReplyForm(!showReplyForm)}
                                        className="text-primary ml-2 flex cursor-pointer items-center gap-1 text-sm hover:underline"
                                    >
                                        <Reply className="h-4 w-4" />
                                        Reply
                                    </button>
                                    {isAuthor && (
                                        <button
                                            onClick={handleDeleteClick}
                                            className={`${isDeleting ? 'font-bold' : ''} text-destructive ml-2 flex cursor-pointer items-center gap-1 text-sm hover:underline`}
                                        >
                                            <Trash2 className="h-4 w-4" />
                                            {isDeleting ? `Cancel (${countdown})` : 'Delete'}
                                        </button>
                                    )}
                                </div>
                            )}
                        </div>
                        <p className="text-secondary-foreground">{comment.content}</p>
                        {showReplyForm && (
                            <div className="mt-2 ml-4">
                                <CommentForm post={post} parentId={comment.id} onSuccess={() => setShowReplyForm(false)} />
                            </div>
                        )}

                        <CollapsibleTrigger asChild>
                            {comment.replies && comment.replies.length > 0 ? (
                                <Button variant={'ghost'} size="sm" className="-ml-2 cursor-pointer gap-1 rounded-full px-2">
                                    <span className="text-xs">{comment.replies.length} replies</span>
                                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showReplies ? 'rotate-180' : ''}`} />
                                </Button>
                            ) : (
                                ''
                            )}
                        </CollapsibleTrigger>
                        {/* Replies */}
                        <CollapsibleContent className="motion-preset-blur-down-md">
                            {comment.replies && comment.replies.length > 0 && (
                                <div className="border-l-muted-foreground/20 mt-2 space-y-4 border-l pl-4">
                                    {comment.replies.map((reply) => (
                                        <Comment key={reply.id} comment={reply} post={post} />
                                    ))}
                                </div>
                            )}
                        </CollapsibleContent>
                    </div>
                </Collapsible>
            </div>
        </div>
    );
}
