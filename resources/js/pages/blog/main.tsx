import { Link } from "@/components/blog/navigation/link";
import Navbar from "@/components/blog/navigation/nav";
import FeaturedPost from "@/components/blog/post/featured-post";
import FeaturedPostCarousel from "@/components/blog/post/featured-post-carousel";
import { Post } from "@/components/blog/post/post";
import { HomeIcon, NewspaperIcon } from "lucide-react";
import { title } from "process";

export default function BlogPage() {
  const navLinks: Link[] = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "Store",
      href: "/store",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const posts: Post[] = [
    {
      title: "Post",
      image: "https://www.stockvault.net/data/2019/12/21/271997/preview16.jpg",
      comments: 10,
      likes: 20,
      description: "This is a post",
      content:
        "This is a post Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: 1,
      category_id: 1,
      slug: "post",
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      status: "published",
      views: 245,
    },
    {
      title: "Post 1",
      image: "https://www.stockvault.net/data/2019/12/21/271997/preview16.jpg",
      comments: 10,
      likes: 20,
      description: "This is a post",
      content:
        "This is a post Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: 1,
      category_id: 1,
      slug: "post",
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      status: "published",
      views: 245,
    },
    {
      title: "Post 2",
      image: "https://www.stockvault.net/data/2019/12/21/271997/preview16.jpg",
      comments: 10,
      likes: 20,
      description: "This is a post",
      content:
        "This is a post Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: 1,
      category_id: 1,
      slug: "post",
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      status: "published",
      views: 245,
    },
    {
      title: "Post 3",
      image: "https://www.stockvault.net/data/2019/12/21/271997/preview16.jpg",
      comments: 10,
      likes: 20,
      description: "This is a post",
      content:
        "This is a post Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: 1,
      category_id: 1,
      slug: "post",
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      status: "published",
      views: 245,
    },
    {
      title: "This is the 5th post",
      image: "https://www.stockvault.net/data/2019/12/21/271997/preview16.jpg",
      comments: 10,
      likes: 20,
      description: "This is a post",
      content:
        "This is a post Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      id: 1,
      category_id: 1,
      slug: "post",
      user_id: 1,
      created_at: new Date(),
      updated_at: new Date(),
      status: "published",
      views: 245,
    },
  ];
  return (
    <div>
      <Navbar links={navLinks} />
      <div className="px-24 pt-4 flex flex-col">
        <span className="text-xl sm:text-2xl md:text-3xl mb-6">
          Featured Posts
        </span>
        <FeaturedPostCarousel posts={posts} display={2} />
      </div>
      <div></div>
    </div>
  );