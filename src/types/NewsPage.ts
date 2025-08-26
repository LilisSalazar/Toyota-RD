import { SanityImageSource } from '@sanity/asset-utils';
export interface NewsPageInterface {
  headerTitle: string;
  backgroundImgHeader: SanityImageSource;
  newsSection: SectionInterface[];
}

interface SectionInterface {
  headerImage: SanityImageSource;
  newsTitle: string;
  subTitle: string;
  slug: Slug;
}

interface Slug {
  current: string;
  _type: string;
}
