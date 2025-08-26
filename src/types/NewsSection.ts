import { SanityImageSource } from '@sanity/asset-utils';

export interface NewsSectionProps {
  title: string;
  news: News[];
}

interface Slug {
  current: string;
  _type: string;
}

export interface News {
  headerImage: SanityImageSource;
  newsTitle: string;
  subTitle: string;
  slug: Slug;
}
