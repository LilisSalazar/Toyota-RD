import { groq } from 'next-sanity';

export const menuModelsPageQuery = groq`
*[_type == "menuModelsPage"][0] {
  title,
  slug,
  options[] {
    category,
    vehicles[] {
      title,
      price,
      image {
        ...,
        asset-> {
         ...
        }
      }
    }
  }
}
`;
