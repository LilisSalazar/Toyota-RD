import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { AboutPage as AboutPageProps } from '@/types';
import { PortableText } from '@portabletext/react';
import { PortableTextBlock } from '@portabletext/types';

interface MVMProps {
  image: string;
  title: string;
  description: PortableTextBlock[];
}

function MisionVisionValores({ image, title, description }: MVMProps) {
  return (
    <div className="grid grid-flow-row gap-y-4 md:h-[200px] md:gap-y-5">
      <div>
        <Image src={image} alt={title} width={102} height={83} className="mx-auto h-[60px] md:h-[83px]" />
      </div>
      <div className="flex flex-row items-end justify-center">
        <div className="text-center uppercase subtitle-2">{title}</div>
      </div>
      <PortableText
        value={description || []}
        components={{
          block: {
            normal: ({ children }) => <p className="text-center">{children}</p>,
          },
          marks: {
            strong: ({ children }) => <span className="font-[Verdana-bold]">{children}</span>,
          },
        }}
      />
    </div>
  );
}

const AboutPage: React.FC<{ data: AboutPageProps | null }> = ({ data }) => {
  const {
    title,
    description,
    heroImage,
    historyTitle,
    historyDescription,
    historyBackgroundImg,
    policyTitle,
    policyDescription,
    policyBackgroundImg,
    valuePropItems,
    policyMobileSection,
  } = data ?? {};
  const heroImageSrc = heroImage ? urlForImage(heroImage) : '';
  const historyBackgroundImgSrc = historyBackgroundImg ? urlForImage(historyBackgroundImg) : '';
  const policyFirstImgSrc = policyMobileSection?.firstImage ? urlForImage(policyMobileSection?.firstImage) : '';
  const policySecondImgSrc = policyMobileSection?.secondImage ? urlForImage(policyMobileSection?.secondImage) : '';
  const policyThirdImgSrc = policyMobileSection?.thirdImage ? urlForImage(policyMobileSection?.thirdImage) : '';
  const policyFourthImgSrc = policyMobileSection?.fourthImage ? urlForImage(policyMobileSection?.fourthImage) : '';

  return (
    <div>
      <div className="grid grid-flow-row lg:grid-cols-2">
        <div className="relative">
          <div className="absolute block lg:hidden inset-y-0 right-0 mt-[5%] mr-[5%]">
            <Image
              src="/logo-delta.svg"
              alt="logo delta comercial"
              width={144}
              height={145}
              className="w-[100px] xl:w-[144px]"
            />
          </div>
          <Image src={heroImageSrc || ''} alt={title || ''} width={1878} height={1562} />
        </div>
        <div className="relative grid grid-flow-row auto-rows-min content-center items-center bg-neutral py-8 lg:py-0">
          <div className="absolute hidden lg:block inset-y-0 right-0 mt-[5%] mr-[5%]">
            <Image
              src="/logo-delta.svg"
              alt="logo delta comercial"
              width={144}
              height={145}
              className="w-[100px] xl:w-[144px]"
            />
          </div>
          <div className="px-4 md:px-24 lg:px-14 space-y-4 2xl:pl-28 2xl:pr-[6.1rem] 2xl:space-y-8">
            <h1 className="leading-none text-center lg:text-left">{title}</h1>
            <PortableText
              value={description || []}
              components={{
                block: {
                  normal: ({ children }) => <div className="home-subtitle text-center lg:text-left">{children}</div>,
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row my-8 sm:my-32 mx-4 gap-y-5 gap-x-5 md:gap-y-0 md:grid-flow-col xl:mx-48 xl:gap-x-20">
        {valuePropItems?.map((valuePropItem, index) => (
          <MisionVisionValores
            key={index}
            image={urlForImage(valuePropItem.valueImage) || ''}
            title={valuePropItem.title}
            description={valuePropItem.description}
          />
        ))}
      </div>
      <div
        style={{ backgroundImage: `url(${historyBackgroundImgSrc})` }}
        className="bg-contain bg-neutral bg-right-bottom bg-no-repeat py-7 xl:py-14 2xl:py-28"
      >
        <div className="grid px-8 xl:grid-cols-2 xl:px-16  2xl:px-36 ">
          <div>
            <h2 className=" h1-like-text text-center md:w-1/2 md:text-left leading-none">{historyTitle}</h2>
            <PortableText
              value={historyDescription || []}
              components={{
                block: {
                  normal: ({ children }) => (
                    <p className="mr-0 last:mb-[40%] mt-4 first:mt-8 md:last:mb-0 md:last:mr-[60%] md:mr-[50%] xl:mr-0 xl:last:mr-[20%] 2xl:mt-8 2xl:first:mt-10">
                      {children}
                    </p>
                  ),
                },
              }}
            />
          </div>
        </div>
      </div>
    <div className="flex flex-col md:flex-row w-full px-6 items-center py-10 md:px-0 md:pl-16 md:pr-0 md:py-20">
  {/* Contenedor título + texto */}
  <div className="w-full md:w-[60%] flex items-center justify-center h-full">
    <div className="flex flex-col text-center md:text-left space-y-6 w-full pr-6 md:pr-12 h-full justify-center">
      {/* Título */}
      <h2 className="text-3xl md:text-5xl font-bold leading-tight">
        {policyTitle}
      </h2>

      {/* Texto desde Sanity */}
      <PortableText
        value={policyMobileSection?.firstSection || []}
        components={{
          block: {
            normal: ({ children }) => (
              <p className="text-base md:text-lg leading-relaxed">{children}</p>
            ),
          },
        }}
      />
      <PortableText
        value={policyMobileSection?.secondSection || []}
        components={{
          block: {
            normal: ({ children }) => (
              <p className="text-base md:text-lg leading-relaxed">{children}</p>
            ),
          },
        }}
      />
      <PortableText
        value={policyMobileSection?.thirdSection || []}
        components={{
          block: {
            normal: ({ children }) => (
              <p className="text-base md:text-lg leading-relaxed">{children}</p>
            ),
          },
        }}
      />
      <PortableText
        value={policyMobileSection?.fourthSection || []}
        components={{
          block: {
            normal: ({ children }) => (
              <p className="text-base md:text-lg leading-relaxed">{children}</p>
            ),
          },
        }}
      />
    </div>
  </div>

  {/* Contenedor de imágenes */}
  <div className="w-full md:w-[40%] grid grid-cols-2 grid-rows-2 gap-4 mt-8 md:mt-0">
    <div></div>

    {policyFirstImgSrc && (
      <Image
        src={policyFirstImgSrc}
        alt={policyTitle || ''}
        width={180}
        height={120}
        className="w-full object-contain"
      />
    )}

    {policySecondImgSrc && (
      <Image
        src={policySecondImgSrc}
        alt={policyTitle || ''}
        width={180}
        height={120}
        className="w-full object-contain"
      />
    )}

    {policyThirdImgSrc && (
      <Image
        src={policyThirdImgSrc}
        alt={policyTitle || ''}
        width={180}
        height={120}
        className="w-full object-contain"
      />
    )}
  </div>
</div>



    </div>
  );
};

export default AboutPage;
