import { SchemaTypeDefinition } from 'sanity';

export const HomePage: SchemaTypeDefinition = {
  name: 'homePage',
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
      name: 'heroCarousel',
      title: 'Carrusel de Hero',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image de Hero',
              type: 'image',
            },
            {
              name: 'mobileImage',
              title: 'Imagen de Hero para mobile',
              type: 'image',
            },
            {
              name: 'title',
              title: 'Titulo de Hero',
              type: 'string',
            },
            {
              name: 'titleSndLine',
              title: 'Titulo de Hero - Segunda linea',
              type: 'string',
            },
            {
              name: 'subtitle',
              title: 'Subtitulo de Hero',
              type: 'string',
            },
            {
              name: 'logo',
              title: 'Logo de Hero',
              type: 'image',
            },
          ],
        },
      ],
    },
    {
      name: 'exploreTitle',
      title: 'Explore Title',
      type: 'string',
    },
    {
      name: 'exploreModel',
      title: 'Explore Models',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'exploreModelGroup',
          fields: [
            {
              name: 'tabTitle',
              title: 'Tab Title',
              type: 'string',
            },
            {
              name: 'models',
              title: 'Models',
              type: 'array',
              of: [
                {
                  type: 'object',
                  name: 'exploreModel',
                  fields: [
                    {
                      name: 'exploreModelTitle',
                      title: 'Explore Model Title',
                      type: 'string',
                    },
                    {
                      name: 'exploreModelSubtitle',
                      title: 'Explore Model Subtitle',
                      type: 'string',
                    },
                    {
                      name: 'exploreModelImg',
                      title: 'Explore Model Image',
                      type: 'image',
                    },
                    {
                      name: 'exploreModelPrice',
                      title: 'Explore Model Price',
                      type: 'string',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'searchConcessionaireImg',
      title: 'Search Concessionaire Image',
      type: 'image',
    },
    {
      name: 'searchConcessionaireTitle',
      title: 'Search Concessionaire Title',
      type: 'string',
    },
    {
      name: 'scheduleMaintenanceTitle',
      title: 'Schedule Maintenance Title',
      type: 'string',
    },
    {
      name: 'scheduleMaintenanceSubTitle',
      title: 'Schedule Maintenance Subtitle',
      type: 'string',
    },
    {
      name: 'scheduleMaintenanceImgMobile',
      title: 'Schedule Maintenance Mobile Image',
      type: 'image',
    },
    {
      name: 'scheduleMaintenanceImgLeft',
      title: 'Schedule Maintenance Left Image',
      type: 'image',
    },
    {
      name: 'scheduleMaintenanceImgRight',
      title: 'Schedule Maintenance Right Image',
      type: 'image',
    },
    {
      name: 'scheduleMaintenanceImgRightSmallDesktop',
      title: 'Schedule Maintenance Right Image - Small desktop',
      type: 'image',
    },
    {
      name: 'scheduleMaintenanceLogo',
      title: 'Schedule Maintenance Logo',
      type: 'image',
    },
    {
      name: 'subFooterImgLeft',
      title: 'Sub Footer Img Left',
      type: 'image',
    },
    {
      name: 'subFooterLogoLeft',
      title: 'Sub Footer Logo Left',
      type: 'image',
    },
    {
      name: 'subFooterTitleLeft',
      title: 'Sub Footer Title Left',
      type: 'string',
    },
    {
      name: 'subFooterSubTitleLeft',
      title: 'Sub Footer Subtitle Left',
      type: 'string',
    },
    {
      name: 'subFooterImgRight',
      title: 'Sub Footer Img Right',
      type: 'image',
    },
    {
      name: 'subFooterTitleRight',
      title: 'Sub Footer Title Right',
      type: 'string',
    },
    {
      name: 'subFooterSubTitleRight',
      title: 'Sub Footer Subtitle Right',
      type: 'string',
    },{
      name: 'subFooterImgvw',
      title: 'Sub Footer Img vw',
      type: 'image',
    },
    {
      name: 'subFooterTitlevw',
      title: 'Sub Footer Title vw',
      type: 'string',
    },
    {
      name: 'subFooterSubTitlevw',
      title: 'Sub Footer Subtitle vw',
      type: 'string',
    },
    {
      name: 'newsSectionTitle',
      title: 'Toyota News Section Title',
      type: 'string',
    },
    {
      name: 'news',
      title: 'Toyota News',
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
