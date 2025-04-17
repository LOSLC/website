import { Link } from "@/components/blog/navigation/link";
import Navbar from "@/components/blog/navigation/nav";
import FeaturedPost from "@/components/blog/post/featured-post";
import { HomeIcon, NewspaperIcon } from "lucide-react";

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
  return (
    <div>
      <Navbar links={navLinks} />
      <div>
        <FeaturedPost
          title="Sample Featured post"
          likesCount={100}
          commentsCount={90}
        />
      </div>
    </div>
  );
}
