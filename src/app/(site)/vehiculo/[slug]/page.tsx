import { cachedLoadQuery, prepareServerClient } from '@/sanity/lib/store';
import { landingModelsPageQuery, vehicleQuery } from '@/sanity/lib/queries';
import { LandingModelsProps } from '@/types';
import LandingModelsPage from '@/components/LandingModelsPage';
import { notFound } from 'next/navigation';
import { Vehicle } from '@/types/Vehicle';

export const revalidate = 600;

interface SlugPageProps {
  params: { slug: string };
}

export default async function SlugPage({ params: { slug } }: SlugPageProps) {
  prepareServerClient();
  const data = await cachedLoadQuery<Vehicle>(
    vehicleQuery,
    { slug },
    { tags: ['sanity:vehicle', `sanity:vehicle:${slug}`] }
  );
  if (data) {
    return <LandingModelsPage data={data} />;
  } else {
    return notFound();
  }
}
