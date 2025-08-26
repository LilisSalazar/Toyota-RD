import { groq } from 'next-sanity';

export const servicesPageQuery = groq`
*[_type == "servicesPage"][0]{
  headerTitle,
  backgroundImgHeader{  
   ...,
    asset->{
      ...
    }
  },
  promiseTitle,
  promiseParagraphs[]{
  _key,
  _type,
  children[]{
  _key,
  _type,
  text,
  },
  },
  features[]{
    featuresTitle,
    featuresDescription,
    featuresBackgroundImg{
       ...,
    asset->{
      ...
    }
    }
  }
}
`;
