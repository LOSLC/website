import { Post } from "@/types/post";
import { Link } from "@inertiajs/react";
import { Eye, Heart } from "lucide-react";

export default function PostComponent({ post }: { post: Post }) {
  return (
    <article className="motion-preset-blur-down mb-4 flex items-center justify-center border bg-white shadow rounded-xl z-10 overflow-hidden">
      <Link
        href={route("blog.show", { slug: post.slug, post: post.id })}
        className="bg-card flex w-full cursor-default flex-col items-center justify-center gap-4"
      >
        <div className="w-full">
          <img
            className="h-50 w-full cursor-pointer border-b-2 object-cover"
            src={
              post.image ? `/storage/${post.image}` : "/assets/img/cover.png"
            }
            alt={post.title}
          />
        </div>
        <div className="flex w-full flex-col p-2">
          <h3 className="cursor-pointer text-2xl font-semibold">
            {post.title}
          </h3>
          <p className="text-muted-foreground mb-2 text-sm">
            {post.description}
          </p>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Heart />
              <span>{post.likesCount}</span>
            </div>
            <div className="flex gap-2">
              <Eye />
              <span>{post.views}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
