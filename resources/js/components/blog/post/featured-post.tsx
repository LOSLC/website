import { Heart, MessageSquare } from "lucide-react";
import { Post } from "./post";

export default function FeaturedPost({ post }: { post: Post }) {
  return (
    <div className="flex flex-col w-full md:w-10/12 lg:w-3/5 justify-between gap-4">
      <div className="w-full">
        <img className="w-full" src={post.image} alt="Post Cover" />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl md:text-4xl">{}</span>
        <div className="flex gap-3">
          <div className="flex gap-2">
            <Heart />
            <span>{post.likes}</span>
          </div>
          <div className="flex gap-2">
            <MessageSquare />
            <span>{post.comments}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
