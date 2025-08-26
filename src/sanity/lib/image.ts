import createImageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';

import { dataset, projectId } from '@/sanity/env';

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
});

export const urlForImage = (source: any) => {
  if (!source) return null;
  return imageBuilder?.image(source).auto('format').fit('max').url();
};
