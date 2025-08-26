import { groq } from 'next-sanity';

export const calculatorPageQuery = groq`
*[_type == "calculatorPage"][0] {
  headerTitle,
  headerDescription, 
  notas[]{
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
