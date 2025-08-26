import React from 'react';
import Image from 'next/image';
import { LandingNewsPageInterface } from '@/types/LandingNewsPage';
import { urlForImage } from '@/sanity/lib/image';
import { PortableText } from '@portabletext/react';
import { getImageDimensions } from '@sanity/asset-utils';

const LandingPage: React.FC<{ data: LandingNewsPageInterface | null }> = ({ data }) => {
  const { newsTitle, paragraphs, coverDetailsImg } = data ?? {};

  const coverDetailsImgSanity = coverDetailsImg ? urlForImage(coverDetailsImg) : '';
  return (
    <div className="w-full">
      <div className="w-full">
        {coverDetailsImgSanity && (
          <Image
            src={coverDetailsImgSanity}
            alt="Toyota Dream Car Art Contest"
            height={getImageDimensions(coverDetailsImgSanity).height}
            width={getImageDimensions(coverDetailsImgSanity).width}
            className="object-containt 2xl:object-cover xl:object-cover lg:object-contain md:object-contain sm:object-cover"
          />
        )}
      </div>

      <div className="text-center my-4 sm:my-8">
        <h1 className="text-gray-900">{newsTitle || ''}</h1>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto mb-8 px-4 md:px-8">
          {paragraphs?.map((paragraph, index) => (
            <PortableText
              key={index}
              value={paragraph}
              components={{
                block: {
                  normal: ({ children }) => <p className="">{children || ''}</p>,
                },
                marks: {
                  strong: ({ children }) => <span className="font-[Verdana-bold]">{children}</span>,
                },
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
