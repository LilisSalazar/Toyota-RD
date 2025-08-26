import { groq } from 'next-sanity';

export const contactPageQuery = groq`
  *[_type == "contactPage"][0] {
    title,
    dealers[]->
  }
`;
