import { SanityImageSource } from '@sanity/asset-utils';
import { PortableTextBlock } from '@portabletext/types';

export interface AboutPage {
  title: string;
  heroImage: SanityImageSource;
  description: PortableTextBlock[];
  valuePropItems: ValuePropItem[];
  historyTitle: string;
  historyDescription: PortableTextBlock[];
  historyBackgroundImg: SanityImageSource;
  policyTitle: string;
  policyDescription: PortableTextBlock[];
  policyBackgroundImg: SanityImageSource;
  policyMobileSection: {
    firstImage: SanityImageSource;
    secondImage: SanityImageSource;
    thirdImage: SanityImageSource;
    fourthImage: SanityImageSource;
    firstSection: PortableTextBlock[];
    secondSection: PortableTextBlock[];
    thirdSection: PortableTextBlock[];
    fourthSection: PortableTextBlock[];
  };
}

interface ValuePropItem {
  title: string;
  description: PortableTextBlock[];
  valueImage: SanityImageSource;
}
