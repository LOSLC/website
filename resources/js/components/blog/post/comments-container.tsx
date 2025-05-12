import { Comment as CommentType, Post as PostType } from '@/types/post';
import Comment from './comment';

type Props = {
  comments: CommentType[];
  post: PostType;
};

export default function CommentsContainer({ comments, post }: Props) {
  return (
    <div className="mt-10">
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} post={post} />
      ))}
    </div>
  );
}
