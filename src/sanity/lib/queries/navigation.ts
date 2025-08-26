import { groq } from 'next-sanity';

export const navigationQuery = groq`
*[_type == 'siteSettings' ][0].mainNavigation->{
    title,
    items[]->{
      label,
      url{
        externalLink,
        "internalLink": internalLink->slug
      }
    },
    logo{
      ...,
      asset->{
        ...
     }
  },
}
`;
