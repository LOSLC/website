import Paginator from '@/components/blog/navigation/pagination';
import PostsContainer from '@/components/blog/post/post-container';
import Footer from '@/components/footer';
import MetaDatas from '@/components/meta-data';
import { useLanguage } from '@/components/providers/language-provider';
import Layout from '@/layouts/layout';
import { MetaData } from '@/types';
import { Pagination, Post } from '@/types/post';
import { Head, usePage } from '@inertiajs/react';

type Props = {
  posts: Post[];
  pagination: Pagination;
  url: string;
};

export default function BlogPage() {
  const { posts, pagination } = usePage<Props>().props;
  const languageProvider = useLanguage();
  const metadatas: MetaData = {
    title: 'Blog',
    description: 'Discover our latest blog posts and stay up-to-date with the latest news and insights from our team.',
    url: 'https://loslc.com/blog',
  };

  return (
    <Layout>
      <Head title="Blog">
        <MetaDatas metadata={metadatas} />
      </Head>
      <div className="min-h-screen">
        <div className="flex h-100 flex-col">
          <h1 className="mb-6 text-center text-xl font-bold uppercase sm:text-2xl md:text-3xl">{languageProvider.get('blog.title')}</h1>
          {posts.length === 0 && <p className="text-center">{languageProvider.get('blog.no_posts')}</p>}
          <PostsContainer posts={posts} />
        </div>
        <Paginator pagination={pagination} />
        <Footer />
      </div>
    </Layout>
  );
}
