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

export interface FooterProps {
  logo?: SanityImageSource;
  mission?: string;
  col1Title?: string;
  col1Links?: NavigationItem[];
  col2Title?: string;
  col2Links?: NavigationItem[];
  copyrightText?: string;
}
