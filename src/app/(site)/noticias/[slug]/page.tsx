import { cachedLoadQuery, prepareServerClient } from '@/sanity/lib/store';
import { landingNewsPageQuery } from '@/sanity/lib/queries';
import { LandingNewsPageInterface } from '@/types/LandingNewsPage';
import LandingPage from '@/components/LandingPage';
import { notFound } from 'next/navigation';

export const revalidate = 600;

interface SlugPageProps {
  params: { slug: string };
}

export default async function SlugPage({ params: { slug } }: SlugPageProps) {
  prepareServerClient();
  const data = await cachedLoadQuery<LandingNewsPageInterface>(
    landingNewsPageQuery,
    { slug },
    { tags: ['sanity:news', `sanity:news:${slug}`] }
  );
  if (data) {
    return <LandingPage data={data} />;
  } else {
    return notFound();
  }
}