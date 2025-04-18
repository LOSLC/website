import { ChevronLeft, ChevronRight } from "lucide-react";
import { Post } from "./post";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import FeaturedPost from "./featured-post";

export default function FeaturedPostCarousel({
  posts,
}: { posts: Post[]; display: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveForwards = () => {};

  const moveBackwards = () => {};

  return (
    <div className="flex items-center justify-center sm:gap-2">
      <div className="flex  items-center justify-center">
        <Button
          variant="default"
          className="rounded-none"
          onClick={moveBackwards}
        >
          <ChevronLeft />
        </Button>
      </div>
      <div className="flex items-center justify-center gap-4 w-full">
        {posts.map((post, index) => {
          return <FeaturedPost post={post} key={index} />;
        })}
      </div>
      <div className="flex items-center justify-center">
        <Button
          variant="default"
          className="rounded-none"
          onClick={moveForwards}
        >
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
