import { notFound } from 'next/navigation';
import { loadQuery, prepareServerClient } from '@/sanity/lib/store';
import {
  AboutPage as AboutPageProps,
  CalculatorPageProps,
  NewsPageInterface,
  ServicesPageProps,
  QuoterPageProps,
  RepairPageProps,
  TakataPageProps,
  PrivacyPoliciesProps,
  LegalTermsProps,
  WorkShopPageProps,
  HybridsPageProps,
  DealersPageProps,
  VehicleComparatorProps,
  TestDriveProps,
  ContactPageProps,
  CategoryVehicleProps,
  VehicleForComparator,
} from '@/types';
import {
  aboutPageQuery,
  takataPageQuery,
  newsPageQuery,
  quoterPageQuery,
  repairPageQuery,
  calculatorPageQuery,
  servicesPageQuery,
  privacyPoliciesQuery,
  legalTermsQuery,
  workShopPageQuery,
  hybridsPageQuery,
  dealersPageQuery,
  vehicleComparatorQuery,
  testDriveQuery,
  contactPageQuery,
  vehicleCategoryQuery,
  vehicleListForComparatorQuery,
} from '@/sanity/lib/queries';

import AboutPage from '@/components/AboutPage';
import ServicesPage from '@/components/ServicesPage';
import NewsPage from '@/components/NewsPage';
import RepairPage from '@/components/RepairPage';
import CalculatorPage from '@/components/CalculatorPage';
import QuoterPage from '@/components/QuoterPage';
import TakataPage from '@/components/TakataPage';
import PrivacyPolicies from '@/components/PrivacyPoliciesPage';
import LegalTerms from '@/components/LegalTerms';
import WorkShopPage from '@/components/WorkShopPage';
import HybridsPage from '@/components/HybridsPage';
import DealersPage from '@/components/DealersPage';
import VehicleComparator from '@/components/VehicleComparator';
import TestDrivePage from '@/components/TestDrivePage';
import ContactPage from '@/components/ContactPage';

interface SlugPageProps {
  params: { slug: string };
}

export const revalidate = 600;

const slugMapping: Record<string, { query: string; component: React.ComponentType<any> }> = {
  nosotros: {
    query: aboutPageQuery,
    component: AboutPage,
  },
  servicios: {
    query: servicesPageQuery,
    component: ServicesPage,
  },
  news: {
    query: newsPageQuery,
    component: NewsPage,
  },
  hibridos: {
    query: hybridsPageQuery,
    component: HybridsPage,
  },
};

export default async function SlugPage({ params: { slug } }: SlugPageProps) {
  prepareServerClient();
  // const matchedPage = slugMapping[slug];

  // if (matchedPage) {
  //   const { query, component: PageComponent } = matchedPage;
  //   const { data } = await loadQuery(query);
  //   return <PageComponent data={data} />;
  // }

  if (slug === 'nosotros') {
    const { data } = await loadQuery<AboutPageProps>(aboutPageQuery);
    return <AboutPage data={data} />;
  }
  if (slug === 'servicios') {
    const { data } = await loadQuery<ServicesPageProps>(servicesPageQuery);
    return <ServicesPage data={data} />;
  }
  if (slug === 'noticias') {
    const { data } = await loadQuery<NewsPageInterface>(newsPageQuery);
    return <NewsPage data={data} />;
  }
  if (slug === 'repuestos') {
    const { data } = await loadQuery<RepairPageProps>(repairPageQuery);
    const { data: vehicleData } = await loadQuery<CategoryVehicleProps[]>(vehicleCategoryQuery);
    return <RepairPage data={data} vehicleData={vehicleData} />;
  }
  if (slug === 'calculadora') {
    const { data } = await loadQuery<CalculatorPageProps>(calculatorPageQuery);
    return <CalculatorPage data={data} />;
  }
  if (slug === 'cotizador') {
    const { data } = await loadQuery<QuoterPageProps>(quoterPageQuery);
    return <QuoterPage data={data} />;
  }
  if (slug === 'takata') {
    const { data } = await loadQuery<TakataPageProps>(takataPageQuery);
    return <TakataPage data={data} />;
  }
  if (slug === 'politicas-de-privacidad') {
    const { data } = await loadQuery<PrivacyPoliciesProps>(privacyPoliciesQuery);
    return <PrivacyPolicies data={data} />;
  }
  if (slug === 'terminos-legales') {
    const { data } = await loadQuery<LegalTermsProps>(legalTermsQuery);
    return <LegalTerms data={data} />;
  }
  if (slug === 'taller') {
    const { data } = await loadQuery<WorkShopPageProps>(workShopPageQuery);
    return <WorkShopPage data={data} />;
  }
  if (slug === 'hibridos') {
    const { data } = await loadQuery<HybridsPageProps>(hybridsPageQuery);
    return <HybridsPage data={data} />;
  }
  if (slug === 'dealers') {
    const { data } = await loadQuery<DealersPageProps>(dealersPageQuery);
    return <DealersPage data={data} />;
  }
  if (slug === 'comparador') {
    const { data } = await loadQuery<VehicleComparatorProps>(vehicleComparatorQuery);
    const { data: vehicleData } = await loadQuery<VehicleForComparator[]>(vehicleListForComparatorQuery);
    return <VehicleComparator data={data} vehicleData={vehicleData} />;
  }
  if (slug === 'test-drive') {
    const { data } = await loadQuery<TestDriveProps>(testDriveQuery);
    return <TestDrivePage data={data} />;
  }
  if (slug === 'contacto') {
    const { data } = await loadQuery<ContactPageProps>(contactPageQuery);
    return <ContactPage data={data} />;
  }

  return notFound();
}
