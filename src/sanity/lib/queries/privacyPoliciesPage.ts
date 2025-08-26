import { groq } from 'next-sanity';

export const privacyPoliciesQuery = groq`
*[_type == "privacyPoliciesPage"][0] {
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
