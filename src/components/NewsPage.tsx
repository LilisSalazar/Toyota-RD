import React from 'react';
import Image from 'next/image';

import { getImageDimensions } from '@sanity/asset-utils';
import { NewsPageInterface } from '@/types/NewsPage';
import { urlForImage } from '@/sanity/lib/image';

const NewsPage: React.FC<{ data: NewsPageInterface | null }> = ({ data }) => {
  const { backgroundImgHeader, headerTitle, newsSection } = data ?? {};

  const backgroundImgSrc = backgroundImgHeader ? urlForImage(backgroundImgHeader) : '';

  return (
    <div className="w-full">
      <section className="relative w-full sm:h-[600px] h-[393px] overflow-hidden">
        <Image
          alt="header"
          fill
          className="object-cover"
          loading="lazy"
          src={backgroundImgSrc || ''}
          priority={false}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-white break-words text-center">
          {headerTitle || ''}
        </h1>
      </section>

      <section className="w-full max-w-none mb-6 px-4 sm:px-8 xl:px-32">
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
    {newsSection?.map((section, index) => {
      const newsSectionImg = section.headerImage ? urlForImage(section.headerImage) : '';
      return (
        <div
          key={index}
          className="bg-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row h-full"
        >
          {newsSectionImg && (
            <Image
              src={newsSectionImg}
              alt={`News ${index + 1}`}
              className="w-full sm:w-1/2 object-cover h-48 sm:h-auto"
              style={{ objectPosition: 'center 27%' }}
              width={getImageDimensions(newsSectionImg).width}
              height={getImageDimensions(newsSectionImg).height}
            />
          )}

          <div className="p-6 flex flex-col justify-center text-left sm:w-1/2">
            <h2 className="text-lg font-bold mb-2 break-words">{section.newsTitle || ''}</h2>
            <p className="text-sm mb-4">{section.subTitle || ''}</p>
            <a
              href={`noticias/${section?.slug.current}`}
              className="text-black underline text-sm font-medium"
            >
              Más info + &gt;
            </a>
          </div>
        </div>
      );
    })}
  </div>
</section>

    </div>
  );
};

export default NewsPage;
