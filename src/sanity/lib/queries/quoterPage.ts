import { groq } from 'next-sanity';

export const quoterPageQuery = groq`
  *[_type == "quoterPage"][0] {
    title,
    carDescription,
    dealers[]->,
    ModelosAutos[],
    carImg {
      ...,
      asset->{
        ...
      },
    },
  }
`;
