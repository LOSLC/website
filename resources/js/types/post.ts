export interface Author {
  id: number;
  name: string;
  avatar: string | null;
}

export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
  slug: string;
  image: string | null;
  created_at: string;
  updated_at: string;
  author: Author;
  is_liked: boolean;
  like_count: boolean;
  tags: Tag[];
  categories: Category[];
}

export interface Category {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  posts: Post[];
}

export interface Tag {
  id: number;
  name: string;
}

export interface Props {
  posts: Post[];
  categories: Category[];
  tags: Tag[];
}
