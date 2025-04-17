import { ChevronLeft, ChevronRight } from "lucide-react";
import { Post } from "./post";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import FeaturedPost from "./featured-post";

export default function FeaturedPostCarousel({
  posts,
  display,
}: { posts: Post[]; display: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="flex items-center justify-center sm:gap-2">
      <div className="flex  items-center justify-center">
        <Button variant="outline" className="rounded-none">
          <ChevronLeft />
        </Button>
      </div>
      <div className="flex items-center justify-center gap-4">
        {posts.map((post, index) => {
          return <FeaturedPost post={post} key={index} />;
        })}
      </div>
      <div className="flex items-center justify-center">
        <Button variant="outline" className="rounded-none">
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
