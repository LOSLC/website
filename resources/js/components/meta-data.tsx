import { MetaData } from '@/types';

type Props = {
  metadata?: MetaData;
};

export default function MetaDatas({ metadata }: Props) {
  const defaultMetadata: MetaData = {
    title: 'LOSLC',
    description:
      'Welcome to Loslc.tech. Linux & Open Source Lovers Community. We are a community of Linux and open-source enthusiasts who love to share our knowledge and experience with others.',
    image: 'https://loslc.tech/assets/img/loslc-home.png',
    keywords: 'Linux, Loslc, Open Source, Community',
    url: 'https://loslc.tech',
  };
  return (
    <>
      {/* Primary Meta Tags */}
      <meta head-key="title" name="title" content={metadata?.title || defaultMetadata.title} />
      <meta head-key="description" name="description" content={metadata?.title || defaultMetadata.description} />
      <meta head-key="og:type" property="og:type" content="website" />
      <meta head-key="og:url" property="og:url" content={metadata?.url || defaultMetadata.url} />
      <meta head-key="og:title" property="og:title" content={`${metadata?.title || defaultMetadata.title} | LOSLC`} />
      <meta head-key="og:description" property="og:description" content={metadata?.description || defaultMetadata.description} />
      <meta head-key="og:image" property="og:image" content={metadata?.image || defaultMetadata.image} />

      {/* Twitter meta */}
      <meta head-key="twitter:card" property="twitter:card" content="summary_large_image" />
      <meta head-key="twitter:url" property="twitter:url" content={metadata?.url || defaultMetadata.url} />
      <meta head-key="twitter:title" property="twitter:title" content={`${metadata?.title || defaultMetadata.title} | LOSLC`} />
      <meta head-key="twitter:description" property="twitter:description" content={metadata?.description || defaultMetadata.description} />
      <meta head-key="twitter:image" property="twitter:image" content={metadata?.image || defaultMetadata.image} />
    </>
  );
}
