'use client';
import { useLiveMode } from '@sanity/react-loader';
import { VisualEditing } from 'next-sanity';

import { client } from '@/sanity/lib/client';

const stegaClient = client.withConfig({ stega: true });

export default function LiveVisualEditing() {
  useLiveMode({ studioUrl: '/studio', client: stegaClient });

  return <VisualEditing />;
}
