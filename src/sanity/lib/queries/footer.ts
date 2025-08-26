import { groq } from 'next-sanity';

export const footerQuery = groq`
*[_type == 'siteSettings' ][0].mainFooter->{
    mission,
    col1Title,
    col2Title,
    copyrightText,
    col1Links[]->{
      label,
      url{
        externalLink,
        "internalLink": internalLink->slug
      }
    },
    col2Links[]->{
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
