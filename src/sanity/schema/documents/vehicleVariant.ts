import { SchemaTypeDefinition } from 'sanity';
import { array } from 'yup';

export const VehicleVariant: SchemaTypeDefinition = {
  name: 'vehicleVariant',
  type: 'document',
  title: 'Variante de Vehiculo',
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
        source: 'title',
        maxLength: 200,
        isUnique: () => true,
      },
    },
    {
      name: 'image',
      title: 'Imagen del vehiculo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },

    /* Technical Details Section */
    {
      name: 'technicalDetailsSection',
      title: 'Seccion de detalles tecnicos',
      type: 'object',
      fields: [
        {
          name: 'motor',
          title: 'Motor',
          type: 'string',
        },
        {
          name: 'transmission',
          title: 'Transmision',
          type: 'string',
        },
        {
          name: 'frontSuspension',
          title: 'Suspension delantera',
          type: 'string',
        },
        {
          name: 'rearSuspension',
          title: 'Suspension trasera',
          type: 'string',
        },
        {
          name: 'brakes',
          title: 'Frenos',
          type: 'string',
        },
        {
          name: 'tires',
          title: 'Neumaticos',
          type: 'string',
        },
        {
          name: 'traction',
          title: 'Traccion',
          type: 'string',
        },
        {
          name: 'category',
          title: 'Categoria',
          type: 'string',
        },
        {
          name: 'rims',
          title: 'Aros',
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
          title: 'Llave',
          type: 'string',
        },
        {
          name: 'passengers',
          title: 'Pasajeros',
          type: 'number',
        },
        {
          name: 'audioSystem',
          title: 'Sistema de audio',
          type: 'string',
        },
      ],
    },
    {
      name: 'customAttributes',
      title: 'Atributos adicionales',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Nombre', type: 'string' },
            { name: 'value', title: 'Valor', type: 'string' },
          ],
        },
      ],
    },
  ],
};
