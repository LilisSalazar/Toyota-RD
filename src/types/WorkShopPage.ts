import { SanityImageSource } from '@sanity/asset-utils';
import { Dealer } from './Dealer';

export interface WorkShopPageProps {
  title: string;
  slug: {
    _type: 'slug';
    current: string;
  };
  headerImage: SanityImageSource;
  heroTitle: string;
  heroSubtitle: string;
  subHeaderTitle: string;
  subHeaderImg: SanityImageSource;
  subHeaderDescription: string;
  footerTitle: string;
  footerImg: SanityImageSource;
  footerDescription: string;
  dealers: Dealer[];
}
