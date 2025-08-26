import { SchemaTypeDefinition } from 'sanity';

export const TakataPage: SchemaTypeDefinition = {
  name: 'takataPage',
  title: 'Takata Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titulo de la pagina',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug de la pagina',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      name: 'backgroundHeaderImg',
      title: 'Imagen principal del banner',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroText',
      title: 'Texto de banner superior',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'heroLogo',
      title: 'Logo superior de banner superior',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'subHeaderImg',
      title: 'Logos del banner',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        hotspot: true,
      },
    },
    {
      name: 'carrouselFeature',
      title: 'Lista de modelos afectados',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'carrouselImg',
              title: 'Imagen',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'carrouselTitle',
              title: 'Modelo',
              type: 'string',
            },
            {
              name: 'carrouselDescription',
              title: `Año del modelo`,
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'footerTitle',
      title: 'Footer Title',
      type: 'string',
    },
    {
      name: 'footerImg',
      title: 'Footer Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
