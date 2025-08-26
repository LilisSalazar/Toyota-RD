import { groq } from 'next-sanity';

export const takataPageQuery = groq`
*[_type == "takataPage"][0]{
  backgroundHeaderImg{
    ...,
    asset->{
      ...
    }
  },
  heroLogo{
    ...,
    asset->{
      ...
    }
  },
  heroText[],  
  subHeaderImg[]{
    ...,
    asset->{
      ...
    }
  },
  carrouselFeature[]{
    carrouselImg{
      ...,
      asset->{
        ...
      }
    },
    carrouselTitle,
    carrouselDescription
  },
  footerTitle,
  footerImg{
    ...,
    asset->{
      ...
    }
  }
}
`;
