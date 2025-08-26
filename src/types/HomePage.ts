import { SanityImageSource } from '@sanity/asset-utils';

export interface HomePageProps {
  heroCarousel: HeroItem[];
  exploreTitle: string;
  exploreTabTitle: string[];
  exploreModel: ExploreModelGroup[];
  searchConcessionaireImg: SanityImageSource;
  searchConcessionaireTitle: string;
  scheduleMaintenanceTitle: string;
  scheduleMaintenanceSubTitle: string;
  scheduleMaintenanceImgMobile: SanityImageSource;
  scheduleMaintenanceImgLeft: SanityImageSource;
  scheduleMaintenanceImgRightSmallDesktop: SanityImageSource;
  scheduleMaintenanceImgRight: SanityImageSource;
  scheduleMaintenanceLogo: SanityImageSource;
  subFooterImgLeft: SanityImageSource;
  subFooterLogoLeft: SanityImageSource;
  subFooterTitleLeft: string;
  subFooterSubTitleLeft: string;
  subFooterImgRight: SanityImageSource;
  subFooterTitleRight: string;
  subFooterSubTitleRight: string;
  subFooterImgvw: SanityImageSource;
  subFooterTitlevw: string;
  subFooterSubTitlevw: string;
  newsSectionTitle: string;
  news: News[];
}

export interface ExploreModelGroup {
  tabTitle: string;
  models: ExploreModel[];
}

export interface ExploreModel {
  exploreModelTitle: string;
  exploreModelSubtitle: string;
  exploreModelImg: SanityImageSource;
  exploreModelPrice: string;
}

export interface NewExploreModel {
  price: string;
  image: SanityImageSource;
  shortDescription: string;
  brand: string;
  slug: { current: string };
}

interface News {
  headerImage: SanityImageSource;
  newsTitle: string;
  subTitle: string;
  slug: Slug;
}

export interface HeroItem {
  image: SanityImageSource;
  mobileImage: SanityImageSource;
  title: string;
  titleSndLine: string;
  subtitle: string;
  logo: SanityImageSource;
}

interface Slug {
  current: string;
  _type: string;
}
