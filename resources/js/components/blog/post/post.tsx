import { truncateText } from "@/lib/utils";
import { Post } from "@/types/post";
import { Link } from "@inertiajs/react";
import { ChevronRight } from "lucide-react";

export default function PostComponent({ post }: { post: Post }) {
  return (
    <article className="motion-preset-blur-down bg-card mb-4 flex items-center justify-center border p-4 shadow rounded-xl w-full lg:w-7/12">
      <Link
        href={route("blog.show", { slug: post.slug, post: post.id })}
        className="flex w-full cursor-default flex-col items-start justify-between gap-4 md:flex-row"
      >
        <div className="w-full md:w-1/2">
          <img
            className="h-60 w-full cursor-pointer object-cover rounded-xl"
            src={
              post.image ? `/storage/${post.image}` : "/assets/img/cover.png"
            }
            alt={post.title}
          />
        </div>
        <div className="flex w-full flex-col justify-between md:w-1/2 gap-4">
          <div>
            <h4 className="tex-3xl text-primary mb-2 flex items-center gap-2 font-medium">
              <ChevronRight />
              {post.category.name}
            </h4>
            <div className="flex flex-col gap-4">
              <h3 className="cursor-pointer text-2xl font-semibold">
                {post.title}
              </h3>
              <p className="text-muted-foreground mb-2 text-sm">
                {truncateText(post.description)}
              </p>
            </div>
          </div>
          <div className="my-2 flex items-start gap-4">
            <img
              src={
                post.author.avatar
                  ? `/storage/avatar/${post.author.avatar}`
                  : "/assets/img/user-profile.png"
              }
              alt={post.author.name}
              className="h-12 w-12 rounded-full"
            />
            <div className="flex flex-col gap-2">
              <h4>{post.author.name}</h4>
              <p className="text-muted-foreground text-sm">{post.created_at}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
