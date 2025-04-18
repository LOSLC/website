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
    isLiked: boolean | null;
    likeCount: number;
    views: number;
    created_at: string;
    updated_at: string;
    author: Author;
    tags: Tag[];
    categories: Category[];
}

export interface Category {
    id: number;
    name: string;
    description: string | null;
    createdAt: string;
    updatedAt: string;
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
    post: Post;
    category: Category;
    pagination: Pagination;
}

export interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

export interface Pagination {
    current_page: number;
    lastPage: number;
    perPage: number;
    total: number;
    links: PaginationLink[];
}
