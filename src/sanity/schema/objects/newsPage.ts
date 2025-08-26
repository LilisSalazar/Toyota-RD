export const NewsPage = {
  name: 'newsPage',
  title: 'News Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo de pagina',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug de pagina',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
    },
    {
      name: 'backgroundImgHeader',
      title: 'Background Image Header',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'newsSection',
      title: 'News Section',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'landingNewsPage' }],
        },
      ],
    },
  ],
};
