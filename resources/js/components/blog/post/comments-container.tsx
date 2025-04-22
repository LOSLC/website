import { Comment as CommentType, Post as PostType } from "@/types/post";
import { Reply, ChevronDown } from "lucide-react";
import { useState } from "react";
import CommentForm from "./comment-form";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

export default function CommentsContainer({
  comments,
  post,
}: { comments: CommentType[]; post: PostType }) {
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

  return (
    <div
      className="my-4 cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-2">
        <div>
          <img
            src={comment.author.avatar ?? "/assets/img/user-profile.png"}
            alt={comment.author.name}
            className="h-8 w-8 rounded-full"
          />
        </div>
        <Collapsible open={showReplies} onOpenChange={setShowReplies}>
          <div>
            <div className="flex items-center gap-1">
              <h4 className="font-medium">{comment.author.name}</h4>
              <span>·</span>
              <span className="text-muted-foreground text-sm">
                {comment.createdAt}
              </span>
              {isHovered && (
                <button
                  onClick={() => setShowReplyForm(!showReplyForm)}
                  className="text-primary ml-2 flex cursor-pointer items-end gap-2 text-sm hover:underline"
                >
                  <Reply />
                  Reply
                </button>
              )}
            </div>
            <p className="text-secondary-foreground">{comment.content}</p>
            {showReplyForm && (
              <div className="mt-2 ml-4">
                <CommentForm
                  post={post}
                  parentId={comment.id}
                  onSuccess={() => setShowReplyForm(false)}
                />
              </div>
            )}

            <CollapsibleTrigger asChild>
              {comment.replies && comment.replies.length > 0 ? (
                <Button
                  variant={"ghost"}
                  size="sm"
                  className="rounded-full cursor-pointer gap-1 px-2 -ml-2"
                >
                  <span className="text-xs">
                    {comment.replies.length} replies
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${
                      showReplies ? "rotate-180" : ""
                    }`}
                  />
                </Button>
              ) : (
                <></>
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
