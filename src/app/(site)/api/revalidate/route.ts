import { NextRequest, NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-revalidate-secret') || req.nextUrl.searchParams.get('secret');
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, message: 'Invalid secret' }, { status: 401 });
  }

  const body = await req.json().catch(() => ({} as any));
  const type: string | undefined = body?._type || body?.type;
  const slug: string | undefined =
    body?.slug?.current || body?.slug || body?.after?.slug?.current || body?.after?.slug;

  const typeTags: Record<string, string[]> = {
    navigation: ['sanity:navigation'],
    footer: ['sanity:footer'],
    siteSettings: ['sanity:siteSettings'],
    vehicleCategory: ['sanity:vehicleCategory'],
    homePage: ['sanity:home'],
    newsPage: ['sanity:news'],
    vehicleVariant: ['sanity:vehicle'],
  };

  const tags = new Set<string>();
  if (type && typeTags[type]) typeTags[type].forEach(t => tags.add(t));
  if (type && slug) tags.add(`sanity:${type}:${slug}`);

  if (tags.size === 0) {
    ['sanity:siteSettings', 'sanity:navigation', 'sanity:footer', 'sanity:home'].forEach(t => tags.add(t));
  }

  tags.forEach(t => revalidateTag(t));

  return NextResponse.json({ ok: true, revalidated: Array.from(tags) });
}

