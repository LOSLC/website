export interface Author {
    id: number;
    name: string;
    avatar: string | null;
}

export interface Post {
    id: number;
    tags: Tag[];
    slug: string;
    title: string;
    views: number;
    author: Author;
    content: string;
    category: Category;
    updated_at: string;
    likesCount: number;
    created_at: string;
    description: string;
    image: string | null;
    commentsCount: number;
    isLiked: boolean | null;
}

export interface Category {
    id: number;
    name: string;
    posts: Post[];
    createdAt: string;
    updatedAt: string;
    description: string | null;
}

export interface Tag {
    id: number;
    name: string;
}

export interface Props {
    post: Post;
    tags: Tag[];
    posts: Post[];
    category: Category;
    comments: Comment[];
    categories: Category[];
    pagination: Pagination;
}

export interface PaginationLink {
    label: string;
    active: boolean;
    url: string | null;
}

export interface Pagination {
    total: number;
    perPage: number;
    lastPage: number;
    current_page: number;
    links: PaginationLink[];
}

export interface Comment {
    id: number;
    author: Author;
    content: string;
    createdAt: string;
    updatedAt: string;
    parent?: Comment;
}
