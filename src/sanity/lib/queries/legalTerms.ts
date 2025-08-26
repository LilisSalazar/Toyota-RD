import { groq } from 'next-sanity';

export const legalTermsQuery = groq`
*[_type == "legalTermsPage"][0] {
  title,
  description[]{
    _key,
    _type,
    children[]{
      _key,
      _type,
      text,
    },
  },  
}
`;
