import { groq } from 'next-sanity';

export const dealersPageQuery = groq`
*[_type == "dealersPage"][0] {
  title,
  dealers[]->
}
`;
