import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import LiveVisualEditing from '@/components/LiveVisualEditing';
import { footerQuery, menuModelsPageQuery, navigationQuery, siteSettingsQuery } from '@/sanity/lib/queries';
import Navigation from '@/components/Navigation';
import { cachedLoadQuery, prepareServerClient } from '@/sanity/lib/store';
import { FooterProps, MenuModelsProps, NavigationProps, SiteSettings } from '@/types';
import '@/app/globals.css';
import Footer from '@/components/Footer';
import { VehicleCategoryProps } from '@/types/VehicleCategory';
import { vehicleCategoryQuery } from '@/sanity/lib/queries/vehicleCategoryQuery';
import WhatsAppButton from '@/components/WhatsAppButton';

export const revalidate = 600;

export async function generateMetadata(): Promise<Metadata> {
  prepareServerClient();
  let siteSettings: SiteSettings | null = null;
  try {
    siteSettings = await cachedLoadQuery<SiteSettings>(siteSettingsQuery, {}, { tags: ['sanity:siteSettings'] });
  } catch (error) {
    console.log(error);
  }
  const title = siteSettings?.title ?? '';
  const description = siteSettings?.description ?? '';

  const metadata = {
    title: '',
    description: '',
  };

  return metadata;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  prepareServerClient();
  let navigationData: NavigationProps | null = null;
  let footerData: FooterProps | null = null;
  let modelsData: VehicleCategoryProps[] | null = null;
  try {
    navigationData = await cachedLoadQuery<NavigationProps>(navigationQuery, {}, { tags: ['sanity:navigation'] });
    modelsData = await cachedLoadQuery<VehicleCategoryProps[]>(vehicleCategoryQuery, {}, {
      tags: ['sanity:vehicleCategory'],
    });
    footerData = await cachedLoadQuery<FooterProps>(footerQuery, {}, { tags: ['sanity:footer'] });
  } catch (error) {
    console.log(error);
  }

  return (
    <html lang="en">
      <head>
      {/* <!-- Start of deltaservicio Zendesk Widget script --> */}
      <script id="ze-snippet" src="https://static.zdassets.com/ekr/snippet.js?key=dfa4eed9-11cb-4df8-97a9-664fd4d39e78"> </script>
      {/* <!-- End of deltaservicio Zendesk Widget script —> */}
      
      {/* <!-- Pixel Trackers --> */}
      {/* <!-- Google Analytics Example --> */}
      <script async src="URL"></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            HTML_GOOGLE_ANALITYCS
          `,
        }}
      />
      </head>
      <body className="overflow-x-hidden">
        <Navigation data={navigationData} modelsData={modelsData} />
        {children}
        {draftMode().isEnabled && <LiveVisualEditing />}
        <Footer data={footerData} />
        <WhatsAppButton phoneNumber="+18492580765" message="Hola, me gustaría obtener más información sobre Toyota" />
      </body>
    </html>
  );
}
