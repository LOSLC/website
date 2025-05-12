import { Button } from '@/components/ui/button';
import { Post } from '@/types/post';
import { useForm } from '@inertiajs/react';
import { Heart, LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

type Props = { post: Post };

export default function LikeBtn({ post }: Props) {
  const isLiked = post.isLiked;
  const { data, post: submit, processing } = useForm({ isLiked: !post.isLiked });

  const handleLikeSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    submit(route('blog.like', { post: post.id }), {
      preserveScroll: true,
    });
  };

  return (
    <form method="post">
      <input type="hidden" name="isLiked" value={data.isLiked.toString()} />
      <Button variant={isLiked ? 'default' : 'secondary'} className="cursor-pointer rounded-full" onClick={handleLikeSubmit} disabled={processing}>
        <Heart /> {post.likesCount}
        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
      </Button>
    </form>
  );
}
