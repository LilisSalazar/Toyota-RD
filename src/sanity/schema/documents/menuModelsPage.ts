import { SchemaTypeDefinition } from 'sanity';

export const MenuModelsPage: SchemaTypeDefinition = {
  name: 'menuModelsPage',
  type: 'document',
  title: 'Menu Page',
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
      name: 'options',
      title: 'Menu Options',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'menuOption',
          title: 'Menu Option',
          fields: [
            {
              name: 'category',
              title: 'Category',
              type: 'string',
            },
            {
              name: 'vehicles',
              title: 'Vehicles',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'vehicle',
                  title: 'Vehicle',
                  fields: [
                    {
                      name: 'title',
                      title: 'Vehicle Name',
                      type: 'string',
                    },
                    {
                      name: 'price',
                      title: 'Price',
                      type: 'string',
                    },
                    {
                      name: 'image',
                      title: 'Image',
                      type: 'image',
                      options: {
                        hotspot: true,
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
