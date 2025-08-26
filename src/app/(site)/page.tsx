import { cachedLoadQuery, prepareServerClient } from '@/sanity/lib/store';
import { HomePageProps, VehicleCategoryProps } from '@/types';

import { homePageQuery } from '@/sanity/lib/queries';

import HomePage from '@/components/HomePage';
import { vehicleCategoryQuery } from '@/sanity/lib/queries/vehicleCategoryQuery';

export const revalidate = 600;

export default async function Home() {
  prepareServerClient();
  const data = await cachedLoadQuery<HomePageProps>(homePageQuery, {}, { tags: ['sanity:home'] });
  const vehicleData = await cachedLoadQuery<VehicleCategoryProps[]>(
    vehicleCategoryQuery,
    {},
    { tags: ['sanity:vehicleCategory'] }
  );
  return <HomePage data={data} vehicleData={vehicleData} />;
}