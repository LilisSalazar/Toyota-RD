import { groq } from 'next-sanity';

export const workShopPageQuery = groq`
*[_type == "workShopPage" && _id == "workShopPage"][0]{
  title,
  slug,
  headerImage{
    ...,
    asset->{
      ...
    }
  },
  heroTitle,
  heroSubtitle,
  subHeaderTitle,
  subHeaderImg{
     ...,
    asset->{
      ...
    }
  },
  subHeaderDescription,  
  footerTitle,
  footerImg{
    ...,
    asset->{
      ...
    }
  },
  footerDescription,
  dealers[]->
}
`;
