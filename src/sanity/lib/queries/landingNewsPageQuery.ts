import { groq } from 'next-sanity';

export const landingNewsPageQuery = groq`
*[_type == "landingNewsPage" && slug.current == $slug][0] {
  newsTitle,
  headerImage{
    ...,
    asset->{
      ...
    }
  },
  coverDetailsImg{
    ...,
    asset->{
      ...
    }
  },
  paragraphs[]{
    ...
  }
}
`;
