import { groq } from 'next-sanity';

export const newsPageQuery = groq`
*[_type == "newsPage"][0]{
  headerTitle,
  backgroundImgHeader{  
   ...,
    asset->{
      ...
    }
  },
  newsSection[]->{
    newsTitle,    
    subTitle,
    slug,
    headerImage{
      ...,
      asset->{
        ...
      }
    }
  }
}
`;
