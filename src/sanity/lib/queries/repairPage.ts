import { groq } from 'next-sanity';

export const repairPageQuery = groq`
*[_type == "repairPage"][0]{
  headerTitle,
  headerImg{  
   ...,
    asset->{
      ...
    }
  },
  sectionTitle,  
  pickMarcaOptions[],
  dealers[]->,
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
