export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  slug: string;
  user_id: number;
  category_id: number;
  views: number;
  likes: number;
  comments: number;
  status: "published" | "draft";
  image: string;
  created_at: Date;
  updated_at: Date;
}
