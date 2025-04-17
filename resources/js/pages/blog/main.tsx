import { Props } from "@/types/post";

export default function BlogPage(props: Props) {
  return (
    <>
      Hello World;
      {console.log(props.posts[0])}
    </>
  );
}
