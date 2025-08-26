import * as queryStore from '@sanity/react-loader';
import { draftMode } from 'next/headers';
import { unstable_cache } from 'next/cache';

import { client } from '@/sanity/lib/client';
import { readToken } from '@/sanity/env';

// Llamar esto al inicio de cualquier request del servidor antes de usar loadQuery
export function prepareServerClient() {
  let isDraft = false;
  try {
    isDraft = draftMode().isEnabled;
  } catch {
    isDraft = false;
  }

  if (isDraft) {
    queryStore.setServerClient(
      client.withConfig({
        token: readToken,
        perspective: 'previewDrafts',
        stega: true,
      })
    );
  } else {
    queryStore.setServerClient(client);
  }
}

export const { loadQuery } = queryStore;

export async function cachedLoadQuery<T>(
  query: string,
  params?: Record<string, any>,
  opts?: { tags?: string[]; revalidate?: number }
): Promise<T> {
  const key = ['sanity', query, JSON.stringify(params ?? {})];
  const runner = async () => {
    const { data } = await loadQuery<T>(query, params);
    return data as T;
  };
  return unstable_cache(runner, key, {
    revalidate: opts?.revalidate ?? 600,
    tags: opts?.tags ?? [],
  })();
}