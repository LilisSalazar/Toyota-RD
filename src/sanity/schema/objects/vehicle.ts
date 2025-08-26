import { SchemaTypeDefinition } from 'sanity';

export const Vehicle: SchemaTypeDefinition = {
  name: 'vehicle',
  type: 'document',
  title: 'Vehiculo',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Vehicle Slug',
      type: 'slug',
      options: {
        source: 'model',
        maxLength: 200,
      },
    },
    /* General section */
    {
      name: 'brand',
      title: 'Vehicle Brand',
      type: 'string',
    },
    {
      name: 'model',
      title: 'Vehicle Model',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Vehicle Price',
      type: 'number',
    },
    {
      name: 'modelYear',
      title: 'Vehicle Model Year',
      type: 'string',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'heroPrice',
      title: 'Hero Price',
      type: 'string',
    },
    {
      name: 'subHeaderTitle',
      title: 'Sub Header Title',
      type: 'string',
    },
    {
      name: 'subHeaderDescription',
      title: 'Sub Header Description',
      type: 'string',
    },
    {
      name: 'gallerySubTitle',
      title: 'Gallery Sub Title',
      type: 'string',
    },

    /* Features Section */
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            {
              name: 'featuresTitle',
              title: 'Features Title',
              type: 'string',
            },
            {
              name: 'featuresDescription',
              title: 'Features Description',
              type: 'string',
            },
            {
              name: 'featuresBackgroundImg',
              title: 'Features Background Image',
              type: 'image',
            },
          ],
        },
      ],
    },

    /* Brochure */
    {
      name: 'brochureTitle',
      title: 'Brochure Title',
      type: 'string',
    },
    {
      name: 'pdfFile',
      title: 'Brochure PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
    },
    {
      name: 'brochureImg',
      title: 'Brochure Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    /* Images */
    {
      name: 'image',
      title: 'Vehicle Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'menuImage',
      title: 'Imagen del vehiculo para el menu',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mobileImage',
      title: 'Hero Mobile Image',
      type: 'image',
    },
    {
      name: 'logo',
      title: 'Hero Logo',
      type: 'image',
    },
    {
      name: 'galleryImagesInside',
      title: 'Imagenes Galeria interior',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'galleryImagesOutside',
      title: 'Imagenes Galeria exterior',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid',
      },
    },

    /* Choose Variant */
    {
      name: 'chooseVariantTitle',
      title: 'Choose Variant Title',
      type: 'string',
    },
    {
      name: 'chooseVariant',
      title: 'Variantes del vehiculo',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'vehicleVariant' }],
        },
      ],
    },

    /* Color Options Section */
    {
      name: 'colorOptions',
      title: 'Color Options',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'colorImage',
              title: 'Image for this color',
              type: 'image',
            },
            {
              name: 'colorName',
              title: 'Color Name',
              type: 'array',
              of: [
                {
                  type: 'string',
                },
              ],
            },
            {
              name: 'colorValue',
              title: 'Color Value',
              type: 'array',
              of: [
                {
                  type: 'string',
                  description: 'Hex code or valid CSS color string',
                },
              ],
            },
          ],
        },
      ],
    },

    /* Functionality */
    {
      name: 'functionalitySubSlogan',
      title: 'Functionality Sub Slogan',
      type: 'string',
    },
    {
      name: 'functionality',
      title: 'Functionality',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'functionality',
          title: 'Functionality',
          fields: [
            {
              name: 'functionalityTitle',
              title: 'Functionality Title',
              type: 'string',
            },
            {
              name: 'functionalityDescription',
              title: 'Functionality Description',
              type: 'array',
              of: [{ type: 'block' }],
            },
            {
              name: 'functionalityImage',
              title: 'Functionality Image',
              type: 'image',
            },
          ],
        },
      ],
    },

    /* Technical Details Section */
    {
      name: 'technicalDetailsSection',
      title: 'Technical Details Section',
      type: 'object',
      fields: [
        {
          name: 'motor',
          title: 'Motor',
          type: 'string',
        },
        {
          name: 'transmission',
          title: 'Transmission',
          type: 'string',
        },
        {
          name: 'frontSuspension',
          title: 'Front Suspension',
          type: 'string',
        },
        {
          name: 'rearSuspension',
          title: 'Rear Suspension',
          type: 'string',
        },
        {
          name: 'brakes',
          title: 'Brakes',
          type: 'string',
        },
        {
          name: 'tires',
          title: 'Tires',
          type: 'string',
        },
        {
          name: 'traction',
          title: 'Traction',
          type: 'string',
        },
        {
          name: 'category',
          title: 'Category',
          type: 'string',
        },
        {
          name: 'rims',
          title: 'Rims',
          type: 'string',
        },
        {
          name: 'bluetooth',
          title: 'Bluetooth',
          type: 'string',
        },
        {
          name: 'airbags',
          title: 'Airbags',
          type: 'number',
        },
        {
          name: 'interior',
          title: 'Interior',
          type: 'string',
        },
        {
          name: 'key',
          title: 'Key',
          type: 'string',
        },
        {
          name: 'passengers',
          title: 'Passengers',
          type: 'number',
        },
        {
          name: 'audioSystem',
          title: 'Audio System',
          type: 'string',
        },
      ],
    },
  ],
};
