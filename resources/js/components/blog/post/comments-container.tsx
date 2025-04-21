import { Comment as CommentType } from '@/types/post';

export default function CommentsContainer({ comments }: { comments: CommentType[] }) {
    return (
        <div className="mt-10">
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
}

function Comment({ comment }: { comment: CommentType }) {
    return (
        <div className="my-4">
            <div className="flex items-start gap-2">
                <div>
                    <img src={comment.author.avatar ?? '/assets/img/user-profile.png'} alt={comment.author.name} className="h-8 w-8 rounded-full" />
                </div>
                <div>
                    <div className="flex items-center gap-1">
                        <h4 className="font-medium">{comment.author.name}</h4>
                        <span>·</span>
                        <span className="text-muted-foreground text-sm">{comment.createdAt}</span>
                    </div>
                    <p className="text-secondary-foreground">{comment.content}</p>
                </div>
            </div>
        </div>
    );
}
