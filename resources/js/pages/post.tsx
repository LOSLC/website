import CommentForm from '@/components/blog/post/comment-form';
import CommentsContainer from '@/components/blog/post/comments-container';
import LikeBtn from '@/components/blog/post/like-btn';
import PostContent from '@/components/blog/post/post-content';
import { useLanguage } from '@/components/providers/language-provider';
import { Badge } from '@/components/ui/badge';
import Layout from '@/layouts/layout';
import { BreadcrumbItem } from '@/types';
import { Category, Comment, Post, Tag } from '@/types/post';
import { Head, usePage } from '@inertiajs/react';
import { Dot, Tag as TagIcon } from 'lucide-react';

type Props = {
  post: Post;
  comments: Comment[];
  tags: Tag[];
  category: Category;
};

export default function PostPage() {
  const { post, comments, tags, category } = usePage<Props>().props;

  const languageProvider = useLanguage();
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: 'Blog',
      href: '/blog',
    },
    {
      title: category.name,
      href: '#',
    },
    {
      title: post.title.substring(0, 50) + '...',
      href: '',
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <Head title={post.title}></Head>
      <div className="flex items-center justify-center">
        <div className="max-w-4xl">
          <div>
            {/* Post primary content */}
            <section>
              <div className="mb-8">
                <h1 className="mb-4 text-center text-4xl font-bold"> {post.title} </h1>
              </div>
              {post.image && <img src={`/storage/${post.image}`} alt={post.title} className="mb-4 w-full rounded" />}
              <PostContent content={post.content} />
            </section>

            {/* Post secondary content */}
            <section className="mt-10">
              <div className="mb-8 border-t pt-4">
                <div className="flex items-center gap-2">
                  <p>{languageProvider.get('blog.post.published_by')}</p>
                  <div className="my-2 flex items-center gap-4">
                    <img
                      src={post.author.avatar_url ? `/storage/${post.author.avatar_url}` : '/assets/img/user-profile.png'}
                      alt={post.author.name}
                      className="h-8 w-8 rounded-full"
                    />
                    <h4 className="text-lg font-bold">{post.author.name}</h4>
                    <Dot />
                    <p className="text-muted-foreground text-sm">{post.created_at}</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                {/* Tags */}
                <div className="my-4 flex items-center gap-2">
                  <h3 className="flex items-center gap-2 text-lg font-bold">
                    <TagIcon /> Tags:
                  </h3>
                  <Tags tags={tags} />
                </div>
                {/* Likes */}
                <div>
                  <LikeBtn post={post} />
                </div>
              </div>
              <div className="mt-4 border-t">
                <h3 className="my-4 text-lg font-bold">
                  {post.commentsCount}{' '}
                  {post.commentsCount > 1 ? languageProvider.get('blog.post.comments_plural') : languageProvider.get('blog.post.comments')}
                </h3>
                <CommentForm post={post} />
                <CommentsContainer comments={comments} post={post} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function Tags({ tags }: { tags: Tag[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Badge key={tag.id} variant="secondary" className="cursor-pointer">
          {tag.name}
        </Badge>
      ))}
    </div>
  );
}
