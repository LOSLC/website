import Layout from "@/components/blog/layout";
import Paginator from "@/components/blog/navigation/pagination";
import PostsContainer from "@/components/blog/post/post-container";
import { BreadcrumbItem } from "@/types";
import { Props } from "@/types/post";
import { Head } from "@inertiajs/react";

export default function BlogPage(props: Props) {
  const breadcrumbs: BreadcrumbItem[] = [
    {
      title: "Blog",
      href: "/blog",
    },
  ];
  return (
    <Layout>
      <Head title="Blog" />
      <div className="flex flex-col px-24 pt-4">
        <h1 className="mb-6 text-xl sm:text-2xl md:text-3xl">LOSLC Blog</h1>
        <PostsContainer posts={props.posts} />
      </div>
      <Paginator pagination={props.pagination} />
    </Layout>
  );
}
