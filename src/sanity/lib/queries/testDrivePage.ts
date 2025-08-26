import { groq } from 'next-sanity';

export const testDriveQuery = groq`
  *[_type == "testDrivePage"][0] {
    title,
    carDescription,
    pickSucursalOptions[],
    ModelosAutos[],
    carImg {
      ...,
      asset->{
        ...
      },
    },
    dealers[]->
  }
`;
