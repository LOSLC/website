import { Heart, MessageSquare } from "lucide-react";

export default function FeaturedPost({
  title,
  likesCount,
  commentsCount,
  coverURL,
}: {
  title: string;
  likesCount: number;
  commentsCount: number;
  coverURL?: string;
}) {
  return (
    <div className="flex flex-col w-full md:w-10/12 lg:w-3/5 justify-between gap-4">
      <div className="w-full">
        {coverURL ? (
          <>
            <img className="w-full" src={coverURL} alt="Post Cover" />
          </>
        ) : (
          <><div>
            
          </div></>
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-2xl md:text-4xl">{title}</span>
        <div className="flex gap-3">
          <div className="flex gap-2">
            <Heart />
            <span>{likesCount}</span>
          </div>
          <div className="flex gap-2">
            <MessageSquare />
            <span>{commentsCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
