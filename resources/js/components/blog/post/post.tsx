import { truncateText } from '@/lib/utils';
import { Post } from '@/types/post';
import { Link } from '@inertiajs/react';
import { ChevronRight, Heart, MessageSquare } from 'lucide-react';

type Props = { post: Post };

export default function PostComponent({ post }: Props) {
  return (
    <article className="motion-preset-blur-down bg-card mb-4 flex max-w-[1000px] items-center justify-center rounded-xl border p-4 shadow">
      <Link
        href={route('blog.show', { slug: post.slug, post: post.id })}
        className="flex w-full cursor-default flex-col items-start justify-between gap-4 md:flex-row"
      >
        <div className="w-full md:w-1/2">
          <img
            className="h-64 w-full cursor-pointer rounded-lg object-cover"
            src={post.image ? `/storage/${post.image}` : '/assets/img/cover.png'}
            alt={post.title}
          />
        </div>
        <div className="flex w-full flex-col justify-between gap-2 md:w-1/2">
          <div>
            <div className="tex-2xl text-primary mb-2 flex items-center justify-between font-medium">
              <h4 className="flex items-center gap-2">
                <ChevronRight />
                {post.category.name}
              </h4>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  {post.likesCount}
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5" />
                  {post.commentsCount}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="cursor-pointer text-2xl font-semibold" title={post.title}>
                {truncateText(post.title, 50)}
              </h3>
              <p className="text-muted-foreground mb-2 text-sm" title={post.description}>
                {truncateText(post.description)}
              </p>
            </div>
          </div>
          <div className="my-2 flex items-start gap-4">
            <img
              src={post.author.avatar_url ? `/storage/${post.author.avatar_url}` : '/assets/img/user-profile.png'}
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
