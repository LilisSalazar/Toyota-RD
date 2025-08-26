import React from 'react';
import Image from 'next/image';
import { PortableText } from 'next-sanity';
import { urlForImage } from '@/sanity/lib/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { ServicesPageProps } from '@/types';

const ServicesPage: React.FC<{ data: ServicesPageProps | null }> = ({ data }) => {
  const { headerTitle, backgroundImgHeader, promiseTitle, promiseParagraphs, features } = data ?? {};
  const backgroundHeaderImg = backgroundImgHeader ? urlForImage(backgroundImgHeader) : '';

  return (
    <div>
      {/* Header Section */}
      <section className="relative w-full h-[207px] md:h-[393px] overflow-hidden">
        <Image
          src={backgroundHeaderImg || ''}
          alt={headerTitle || ''}
          fill
          className="object-cover"
          loading="lazy"
          priority={false}
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white break-words text-center">
          <h1 className="mx-16 lg:mx-0">{headerTitle}</h1>
        </div>
      </section>

      {/* Promise Section */}
      <section className="w-full py-10 px-4 md:px-8 xl:px-44">
        <div className="w-full 2xl:mt-8">
          <h1 className="mb-6 text-center">{promiseTitle}</h1>
          <div className="text-left">
            {promiseParagraphs?.map((paragraph, index) => (
              <PortableText
                key={index}
                value={paragraph}
                components={{
                  block: {
                    normal: ({ children }) => <p className="subtitle-2 font-sans">{children}</p>,
                  },
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col justify-center py-8 px-4 space-y-8 md:flex-row md:px-8 xl:px-44 md:space-y-0 md:space-x-6">
        {features?.map((item, index) => {
          const featureImg = item.featuresBackgroundImg ? urlForImage(item.featuresBackgroundImg) : '';
          return (
            <div key={index} className="flex w-full px-0 space-x-2">
              <div className="text-center w-full mb-8">
                <div className="w-full">
                  {featureImg && (
                    <Image
                      src={featureImg}
                      alt={item.featuresTitle}
                      height={getImageDimensions(featureImg).height}
                      width={getImageDimensions(featureImg).width}
                    />
                  )}
                </div>
                <h3 className="pt-4 xl:mb-2 2xl:w-[100%]">{item.featuresTitle}</h3>
                <p className="pt-2 px-4 text-left subtitle-2 font-sans 2xl:w-[100%]">{item.featuresDescription}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ServicesPage;
