import { SchemaTypeDefinition } from 'sanity';

export const LandingNewsPage: SchemaTypeDefinition = {
  name: 'landingNewsPage',
  title: 'Landing News Page',
  type: 'document',
  fields: [
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'coverDetailsImg',
      title: 'Cover Details Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'newsTitle',
      title: 'Titulo de la noticia',
      type: 'string',
    },
    {
      name: 'subTitle',
      title: 'SubTitle',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'newsTitle',
        maxLength: 200,
      },
    },
    {
      name: 'paragraphs',
      title: 'Paragraphs',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
