import { SanityImageSource } from '@sanity/asset-utils';

interface Slug {
  current: string;
  _type: string;
}

interface NavLink {
  internalLink: Slug;
  externalUrl: string;
}

interface NavigationItem {
  label?: string;
  url?: NavLink;
}

export interface NavigationProps {
  title?: string;
  items?: NavigationItem[];
  logo?: SanityImageSource;
}
