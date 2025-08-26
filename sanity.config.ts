'use client';

import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import { apiVersion, dataset, projectId } from '@/sanity/env';
import { schema } from '@/sanity/schema';

// Define the actions that should be available for singleton documents
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

// Define the singleton document types
const singletonTypes = new Set(['aboutPage', 'servicesPage', 'newsPage']);

export default defineConfig({
  title: 'Delta comercial CMS',
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schema.types,

    // Filter out singleton types from the global “New document” menu options
    templates: (templates) => templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singletons
            S.listItem()
              .title('Sobre nosotros')
              .id('aboutPage')
              .child(S.document().schemaType('aboutPage').documentId('aboutPage')),

            S.listItem()
              .title('Pagina de servicios')
              .id('servicesPage')
              .child(S.document().schemaType('servicesPage').documentId('servicesPage')),

            S.listItem()
              .title('Pagina de noticias')
              .id('newsPage')
              .child(S.document().schemaType('newsPage').documentId('newsPage')),

            S.listItem()
              .title('Pagina de repuestos')
              .id('repairPage')
              .child(S.document().schemaType('repairPage').documentId('repairPage')),

            S.listItem()
              .title('Calculadora financiera')
              .id('calculatorPage')
              .child(S.document().schemaType('calculatorPage').documentId('calculatorPage')),

            S.listItem()
              .title('Cotizador')
              .id('quoterPage')
              .child(S.document().schemaType('quoterPage').documentId('quoterPage')),

            S.listItem()
              .title('Pagina de Takata')
              .id('takataPage')
              .child(S.document().schemaType('takataPage').documentId('takataPage')),

            S.listItem()
              .title('Politica de privacidad')
              .id('privacyPoliciesPage')
              .child(S.document().schemaType('privacyPoliciesPage').documentId('privacyPoliciesPage')),

            S.listItem()
              .title('Terminos legales')
              .id('legalTermsPage')
              .child(S.document().schemaType('legalTermsPage').documentId('legalTermsPage')),

            S.listItem()
              .title('Pagina de taller')
              .id('workShopPage')
              .child(S.document().schemaType('workShopPage').documentId('workShopPage')),

            S.listItem()
              .title('Pagina de modelo')
              .id('landingModelsPage')
              .child(S.document().schemaType('landingModelsPage').documentId('landingModelsPage')),

            S.listItem()
              .title('Pagina de hibridos')
              .id('hybridsPage')
              .child(S.document().schemaType('hybridsPage').documentId('hybridsPage')),

            S.listItem()
              .title('Pagina de Dealers')
              .id('dealersPage')
              .child(S.document().schemaType('dealersPage').documentId('dealersPage')),

            S.listItem()
              .title('Pagina de comparacion de vehiculos')
              .id('vehicleComparatorPage')
              .child(S.document().schemaType('vehicleComparatorPage').documentId('vehicleComparatorPage')),

            S.listItem()
              .title('Menu de categorias y modelos')
              .id('menuModelsPage')
              .child(S.document().schemaType('menuModelsPage').documentId('menuModelsPage')),

            S.listItem()
              .title('Pagina de Test Drive')
              .id('testDrivePage')
              .child(S.document().schemaType('testDrivePage').documentId('testDrivePage')),

            S.listItem().title('Home').id('homePage').child(S.document().schemaType('homePage').documentId('homePage')),

            S.listItem()
              .title('Pagina de contacto')
              .id('contactPage')
              .child(S.document().schemaType('contactPage').documentId('contactPage')),

            // Regular document types
            S.documentTypeListItem('footer').title('Footer'),
            S.documentTypeListItem('navigation').title('Navigation'),
            S.documentTypeListItem('navigationItem').title('Navigation Items'),
            S.documentTypeListItem('siteSettings').title('Site Settings'),
            S.documentTypeListItem('landingNewsPage').title('Noticia'),
            S.documentTypeListItem('dealer').title('Dealer'),
            S.documentTypeListItem('vehicle').title('Vehiculo'),
            S.documentTypeListItem('vehicleCategory').title('Categoria de Vehiculo'),
            S.documentTypeListItem('vehicleVariant').title('Variante del vehiculo'),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
  ],
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
