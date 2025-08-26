'use client';
import Image from 'next/image';
import * as React from 'react';
import { useState } from 'react';
import { urlForImage } from '@/sanity/lib/image';
import { getImageDimensions, type SanityImageSource } from '@sanity/asset-utils';
import { PortableText } from '@portabletext/react';
import { Functionality, LandingModelsProps } from '@/types/LandingModelsPage';
import Carousel from 'react-multi-carousel';
import { ButtonGroupProps } from 'react-multi-carousel/lib/types';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { Carousel as FlowbiteCarousel, Flowbite, Card } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import 'react-multi-carousel/lib/styles.css';
import { Vehicle } from '@/types/Vehicle';

interface SanityImageAsset {
  _ref: string;
  _type?: string;
}

interface SanityImage {
  _type: 'image';
  _key?: string;
  asset: SanityImageAsset | null;
  _upload?: unknown;
}

const LandingModelsPage: React.FC<{ data: Vehicle | null }> = ({ data }) => {
  const {
    slug,
    model,
    price,
    heroImage,
    features = [],
    colorOptions = [],
    shortDescription,
    fullDescription,
    gallerySubTitle,
    galleryImagesInside,
    galleryImagesOutside,
    functionality = [],
    functionalitySubSlogan,
    subHeaderTitle,
    subHeaderDescription,
    pdfFile,
    chooseVariant = [],
    chooseVariantTitle,
    brochureImg,
    brochureTitle,
  } = data ?? {};

  // console.log('Vehicle Model:', model);
  // console.log('Gallery Outside Images:', JSON.stringify(galleryImagesOutside, null, 2));
  // console.log('Gallery Inside Images:', JSON.stringify(galleryImagesInside, null, 2));

  const safeUrlForImage = (item: SanityImageSource) => {
    try {
      if (!item) return '';
      // Check if the item is a Sanity image object with _upload
      if (typeof item === 'object' && '_upload' in item && 'asset' in item && !item.asset) return '';
      const url = urlForImage(item);
      return url || '';
    } catch (error) {
      console.error('Error processing image:', item, error);
      return '';
    }
  };

  const heroImageSrc = heroImage ? urlForImage(heroImage) : '';

  /* Select color Section */
  const [selectedColor, setSelectedColor] = useState({
    colorImage: colorOptions && colorOptions[0]?.colorImage ? colorOptions[0].colorImage.asset.url : null,
    colorName: colorOptions && colorOptions[0]?.colorName,
    colorKey: colorOptions
      ? Array.isArray(colorOptions[0].colorValue)
        ? colorOptions[0].colorValue.join('-')
        : colorOptions[0].colorValue
      : '',
  });
  const brochureImgSanity = selectedColor?.colorImage ? selectedColor.colorImage : urlForImage(brochureImg);

  /* Gallery Section */
  function GalleryWithTabs() {
    const originalWidth = 1920;
    const originalHeight = 955;

    const updateImageHeight = () => {
      const newWidth = window.innerWidth;
      const newHeight = (originalHeight * newWidth) / originalWidth;
      const carouselRootElements: NodeListOf<HTMLElement> = document.querySelectorAll('[data-testid=carousel]');
      carouselRootElements.forEach((element) => {
        element.style.height = `${newHeight}px`;
      });
    };

    // Listen for window resize events
    React.useEffect(() => {
      updateImageHeight();
      window.addEventListener('resize', updateImageHeight);
      return () => window.removeEventListener('resize', updateImageHeight);
    }, []);

    const customTheme: CustomFlowbiteTheme = {
      carousel: {
        root: {
          base: 'relative w-full rounded-none',
        },
        indicators: {
          active: {
            off: 'bg-[#C7C7C7] hover:bg-neutral',
            on: 'bg-white',
          },
        },
        scrollContainer: {
          base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none',
        },
      },
    };

    return (
      <div className="w-full flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center mb-4">
          <TabGroup
            className="w-full"
            onChange={() => {
              updateImageHeight();
            }}
          >
            <TabList className="flex justify-center w-full mb-9">
              <Tab className="bg-transparent text-black outline-none subtitle-1 font-[Verdana-bold] py-4 px-8 border-b-4 border-b-[#dbdbdb] data-[selected]:border-b-black border-solid">
                Exterior
              </Tab>
              <Tab className="bg-transparent text-black outline-none subtitle-1 font-[Verdana-bold] py-4 px-8 border-b-4 border-b-[#dbdbdb] data-[selected]:border-b-black border-solid">
                Interior
              </Tab>
            </TabList>
            <TabPanels className="w-full">
              <TabPanel unmount={false} className="w-full">
                <Flowbite theme={{ theme: customTheme }}>
                  <FlowbiteCarousel
                    slide={false}
                    leftControl={
                      <Image
                        src="/carousel-left-arrow-white.svg"
                        alt="Go to previous slide"
                        className="object-contain"
                        height={52}
                        width={52}
                      />
                    }
                    rightControl={
                      <Image
                        src="/carousel-right-arrow-white.svg"
                        alt="Go to next slide"
                        className="object-contain"
                        height={52}
                        width={52}
                      />
                    }
                  >
                    {galleryImagesOutside?.filter((item: SanityImageSource) => {
                      if (!item) return false;
                      // Check if the item is a Sanity image object with _upload
                      if (typeof item === 'object' && '_upload' in item && 'asset' in item && !item.asset) return false;
                      return true;
                    })?.map((item, index) => {
                      const galleryImageSanity = safeUrlForImage(item);
                      return galleryImageSanity ? (
                        <Image
                          key={index}
                          src={galleryImageSanity}
                          alt={`Slide image ${index + 1}`}
                          className="object-contain"
                          width={1920}
                          height={955}
                        />
                      ) : null;
                    })}
                  </FlowbiteCarousel>
                </Flowbite>
              </TabPanel>
              <TabPanel unmount={false} className="w-full">
                <Flowbite theme={{ theme: customTheme }}>
                  <FlowbiteCarousel
                    slide={false}
                    leftControl={
                      <Image
                        src="/carousel-left-arrow-white.svg"
                        alt="Go to previous slide"
                        className="object-contain"
                        height={52}
                        width={52}
                      />
                    }
                    rightControl={
                      <Image
                        src="/carousel-right-arrow-white.svg"
                        alt="Go to next slide"
                        className="object-contain"
                        height={52}
                        width={52}
                      />
                    }
                  >
                    {galleryImagesInside?.filter((item: SanityImageSource) => {
                      if (!item) return false;
                      // Check if the item is a Sanity image object with _upload
                      if (typeof item === 'object' && '_upload' in item && 'asset' in item && !item.asset) return false;
                      return true;
                    })?.map((item, index) => {
                      const galleryImageSanity = safeUrlForImage(item);
                      return galleryImageSanity ? (
                        <Image
                          key={index}
                          src={galleryImageSanity}
                          alt={`Slide image ${index + 1}`}
                          className="object-contain"
                          width={1920}
                          height={955}
                        />
                      ) : null;
                    })}
                  </FlowbiteCarousel>
                </Flowbite>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    );
  }

  const CarouselButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => {
    return (
      <div className="carousel-button-group">
        <button className="bg-transparent absolute top-1/2 left-[2%]" onClick={() => previous && previous()}>
          <Image
            src="/carousel-left-arrow-white.svg"
            alt="Go to previous slide"
            className="object-contain"
            height={52}
            width={52}
          />
        </button>
        <button className="bg-transparent absolute top-1/2 right-[2%]" onClick={() => next && next()}>
          <Image
            src="/carousel-right-arrow-white.svg"
            alt="Go to next slide"
            className="object-contain"
            height={52}
            width={52}
          />
        </button>
      </div>
    );
  };

  const FunctionalityCards: React.FC<{ functionality: Functionality[] }> = ({ functionality }) => {
    const customTheme: CustomFlowbiteTheme = {
      card: {
        root: {
          children: 'flex h-full flex-col justify-start gap-4 p-6',
        },
      },
    };

    return (
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-3 lg:grid-rows-1 xl:px-28">
        {functionality?.map((item, index) => {
          const functionalityImgSanity = item.functionalityImage ? urlForImage(item.functionalityImage) : '';
          return (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 md:space-y-5 xl:mb-12 2xl:mb-20 xl:w-[85%] 2xl:w-[100%]"
            >
              <Flowbite theme={{ theme: customTheme }}>
                <Card
                  className="h-full w-full bg-neutral shadow-2xl"
                  imgSrc={functionalityImgSanity || ''}
                  imgAlt={item.functionalityTitle || ''}
                >
                  <h3 className="text-left mb-2">{item.functionalityTitle || ''}</h3>
                  <p className="text-left">
                    <PortableText
                      value={item.functionalityDescription || []}
                      components={{
                        block: {
                          normal: ({ children }) => <>{children}</>,
                        },
                      }}
                    />
                  </p>
                </Card>
              </Flowbite>
            </div>
          );
        })}
      </div>
    );
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  /* Choose Model Section */
  function ChooseModel() {
    const customTheme: CustomFlowbiteTheme = {
      card: {
        root: {
          children: 'flex h-full flex-col justify-between p-6',
        },
      },
    };

    if (!chooseVariant || chooseVariant.length === 0) {
      return undefined;
    }

    const keyTitleMap = {
      motor: 'Motor',
      transmission: `Transmisión`,
      frontSuspension: `Suspensión Delantera`,
      rearSuspension: `Suspensión Trasera`,
      brakes: 'Frenos',
      tires: 'Neumáticos',
      traction: `Tracción`,
    };

    const attributesToShow = [
      'motor',
      'transmission',
      'frontSuspension',
      'rearSuspension',
      'brakes',
      'tires',
      'traction',
    ];

    const containerClass = `w-[90%] mt-8 sm:mt-24 mx-auto ${chooseVariant.length === 1 ? 'justify-center' : ''}`;
    const cardClass = `h-full bg-neutral pt-4 px-2 rounded-none shadow-none items-center ${chooseVariant.length === 1 ? 'border-x-2 border-y-0 border-solid border-[#d4d4d4]' : ''}`;

    return (
      <Carousel
        arrows={false}
        responsive={responsive}
        renderArrowsWhenDisabled={true}
        renderButtonGroupOutside={true}
        customButtonGroup={<CarouselButtonGroup />}
        containerClass={containerClass}
        sliderClass="divide-none lg:divide-x-2 lg:divide-[#d4d4d4] lg:divide-solid"
      >
        {chooseVariant?.map((item, index) => {
          if (!item || !item.technicalDetailsSection) return undefined;
          const variantImageSrc = item.image ? urlForImage(item.image) : '';
          return (
            <div key={index} className="h-full space-y-2 mb-4 mx-4">
              <Flowbite theme={{ theme: customTheme }}>
                <Card
                  className={cardClass}
                  renderImage={() => {
                    return variantImageSrc ? (
                      <Image
                        width={getImageDimensions(variantImageSrc).width}
                        height={getImageDimensions(variantImageSrc).height}
                        src={variantImageSrc}
                        alt={item?.title || ''}
                        className="object-contain min-h-[235px]"
                      />
                    ) : (
                      <></>
                    );
                  }}
                >
                  <h3 className="text-left mb-4">{item.title || ''}</h3>
                  {attributesToShow
                    .filter((attr) => item?.technicalDetailsSection[attr as keyof typeof item.technicalDetailsSection])
                    .map((attr) => (
                      <>
                        <p className="text-left">
                          <span className="font-[Verdana-bold]">
                            ·{keyTitleMap[attr as keyof typeof keyTitleMap]}:{' '}
                          </span>
                        </p>
                        <p className="text-left">
                          {item?.technicalDetailsSection[attr as keyof typeof item.technicalDetailsSection]}
                        </p>
                      </>
                    ))}
                  {item?.customAttributes &&
                    item?.customAttributes.map((attr) => (
                      <>
                        <p className="text-left">
                          <span className="font-[Verdana-bold]">·{attr.title}: </span>
                        </p>
                        <p className="text-left">{attr.value}</p>
                      </>
                    ))}

                  <div className="flex justify-end">
                    <a href={slug ? `/vehiculo/${slug?.current}` : '#'} className="underline pb-8">
                      Más info &gt;
                    </a>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href={slug ? `/vehiculo/${slug?.current}` : '#'}
                      className="bg-black text-white font-[Verdana-bold] py-2 px-10 rounded-full cursor-pointer"
                    >
                      Ver Modelo
                    </a>
                  </div>
                </Card>
              </Flowbite>
            </div>
          );
        })}
      </Carousel>
    );
  }

  return (
    <div className="mb-12">
      {/* -------------- Header -------------- */}
      <section className="relative h-screen" id="#">
        <Image
          src={heroImageSrc || ''}
          alt={'Hero Img'}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="flex flex-col items-start justify-end relative z-10 h-full text-white text-left px-4  bottom-6 md:px-8 lg:-bottom-8">
          <p className="tracking-widest uppercase">{shortDescription}</p>
          <h1 className="mb-2">{model}</h1>
          <div className="mb-4 flex items-center">
            <p className="mt-2 subtitle-1 font-sans">Precio Desde USD</p>
            <h2>${price?.toLocaleString('en-US', { minimumFractionDigits: 0 })}</h2>
          </div>
          <p className="max-w-prose mb-10 lg:mb-16 xl:pb-8">
            <PortableText
              value={fullDescription || []}
              components={{
                block: {
                  normal: ({ children }) => <>{children}</>,
                },
              }}
            />
          </p>
        </div>
        <div className="absolute bottom-4 left-1/2 md:bottom-6 xs:left-auto xs:right-[50px] md:right-[75px] lg:bottom-8 xl:right-[100px] 2xl:right-[100px] 2xl:bottom-16">
          <a
            href="/cotizador"
            className="transition font-[Verdana-bold] rounded-full bg-red  text-white py-2 px-6 md:ml-3 lg:mb-6 xl:mb-8 md:px-12"
          >
            Cotizar
          </a>
        </div>
      </section>

      {/* -------------- Sub Header + Features -------------- */}
      <section className="flex flex-col justify-center space-y-8 py-8 px-8 md:px-16 xl:px-64 md:mb-8 lg:-mb-12 xl:mb-4 2xl:pb-24">
        <div className="text-center xl:mr-4">
          <h1>Razones para tener una</h1>
          <h1>{subHeaderTitle || model}</h1>
        </div>
        <p className="subtitle-1 text-center font-regular mx-[10%] mb-8">{subHeaderDescription}</p>
        <div className="flex flex-col justify-center md:flex-row xl:mr-8">
          {features?.map((item, index) => {
            const featureImg = item.featuresBackgroundImg ? urlForImage(item.featuresBackgroundImg) : '';
            return (
              <div key={index} className="grid grid-flow-row gap-y-4 md:gap-y-5 2xl:mt-8">
                <div>
                  {featureImg && (
                    <Image
                      src={featureImg}
                      alt={'Feature Image'}
                      width={getImageDimensions(featureImg).width}
                      height={getImageDimensions(featureImg).height}
                      className="object-contain mx-auto h-[60px] md:h-[83px] xl:h-[100px] xl:w-[150px] 2xl:h-[150px] 2xl:w-[200px]"
                    />
                  )}
                </div>
                <div className="flex flex-row items-end justify-center">
                  <div className="subtitle-2 text-center font-[Verdana-bold]">{item.featuresTitle}</div>
                </div>
                <div className="text-center px-6 mx-auto max-w-sm 2xl:px-4">
                  <p className="whitespace-normal">{item.featuresDescription}</p>
                </div>
                <div className="text-center mb-6">
                  <a className="text-black underline" href="#">
                    Más info + &gt;
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* -------------- Select color Section -------------- */}
      <section className="flex flex-col bg-neutral">
        <div className="flex flex-col items-center p-8 lg:justify-between lg:flex-row lg:space-x-8 lg:pt-0 xl:pb-16">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="relative w-full p-0 sm:px-24 sm:pb-24 md:p-24 md:pt-0 lg:p-16 lg:pt-24 xl:p-24 h-[300px] sm:h-[250px] md:h-[300px] lg:h-[400px] 2xl:h-[500px] 2xl:mt-4">
              {brochureImgSanity && (
                <Image
                  src={brochureImgSanity}
                  alt="Brochure Image"
                  height={getImageDimensions(brochureImgSanity).height}
                  width={getImageDimensions(brochureImgSanity).width}
                  className="rounded-lg w-full h-auto"
                  loading="lazy"
                />
              )}
            </div>
          </div>
          <div className="text-center mt-0 md:mt-8 lg:text-left lg:mt-0 lg:w-1/2 xl:pl-12">
            <h3 className="h1-like-text lg:mr-8 xl:mr-5 2xl:mr-4 2xl:pt-6 uppercase">{brochureTitle || ''}</h3>
            <p className="mt-4 lg:mr-80 xl:mr-96 font-[Verdana-bold]">Elige un color</p>

            <div className="flex justify-center lg:justify-start mt-4">
              {colorOptions?.map((color) => {
                const backgroundColor =
                  Array.isArray(color.colorValue) && color.colorValue.length === 2
                    ? `linear-gradient(90deg, ${color.colorValue[0]} 50%, ${color.colorValue[1]} 50%)`
                    : color.colorValue;

                const colorKey = Array.isArray(color.colorValue) ? color.colorValue.join('-') : color.colorValue;
                const isSelectedColor = colorKey === selectedColor.colorKey;

                let styleObject;

                if (isSelectedColor) {
                  styleObject = {
                    background: backgroundColor as string,
                    opacity: 1,
                    borderRadius: '50%',
                    display: 'inline-block',
                    marginRight: '20px',
                    outlineColor: '#2e2e31',
                    outlineOffset: '5px',
                    outlineStyle: 'solid',
                    outlineWidth: '2px',
                  };
                } else {
                  styleObject = {
                    background: backgroundColor as string,
                    opacity: 1,
                    borderRadius: '50%',
                    display: 'inline-block',
                    marginRight: '20px',
                  };
                }

                return (
                  <span
                    key={colorKey}
                    style={styleObject}
                    className="cursor-pointer 2xl:w-[56px] 2xl:h-[56px] w-[38px] h-[38px] active:outline active:outline-2 active:outline-[#2e2e31] active:outline-offset-4"
                    title={Array.isArray(color.colorName) ? color.colorName.join(', ') : color.colorName}
                    onClick={() =>
                      setSelectedColor({
                        colorImage: urlForImage(color.colorImage),
                        colorName: color.colorName,
                        colorKey,
                      })
                    }
                  ></span>
                );
              })}
            </div>
            <div className="grid grid-flow-col space-x-4 lg:space-x-0 -mx-4 sm:mx-0">
              <div>
                <div className="subtitle-2 mt-4">
                  {Array.isArray(selectedColor.colorName) && selectedColor.colorName.length === 2
                    ? selectedColor.colorName.join(' / ')
                    : selectedColor.colorName || ''}
                </div>
                <p className="underline mt-2 mb-2 2xl:pt-2 2xl:pb-4">
                  Precios y colores pueden variar según el modelo.*
                </p>
              </div>
              <div className="mt-4 self-center">
                <a
                  href={pdfFile?.asset.url || ''}
                  download="Toyota_Modelo.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-xs md:text-base text-white font-[Verdana-bold] p-4 mt-4 rounded-full"
                >
                  Descargar brochure
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-neutral grid grid-cols-4 justify-around h-24 sm:h-4 pb-4 md:h-16 xl:h-10 mb-4 lg:mb-8 xl:mb-10 px-2 lg:-mt-12 lg:px-4 xl:px-10 2xl:px-20 xl:pb-4 2xl:pt-12 2xl:pb-6 divide-x-2 divide-[#D4D4D4] divide-solid">
          <a
            href="/comparador"
            className="flex justify-center items-center text-sm lg:text-base underline hover:no-underline px-3 md:pr-4 lg:pr-8 xl:px-12 pl-0 lg:pl-3"
          >
            Comparar Versiones&gt;
          </a>
          <a
            href="/cotizador"
            className="flex justify-center items-center text-sm lg:text-base underline hover:no-underline px-3 md:pr-4 lg:pr-8 lg:pl-3 xl:px-12"
          >
            Cotizar Vehículo&gt;
          </a>
          <a
            href="/test-drive"
            className="flex justify-center items-center text-sm lg:text-base underline hover:no-underline px-3 md:pr-4 lg:pr-8 lg:pl-3 xl:px-12"
          >
            Solicitar Test Drive&gt;
          </a>
          <a
            href="/calculadora"
            className="flex justify-center items-center text-sm lg:text-base underline hover:no-underline px-3 2xl:pl-4 pr-0 lg:pr-3"
          >
            Calculadora Financiera&gt;
          </a>
        </div>
      </section>

      {/* -------------- Functionality -------------- */}
      <section className="py-8 px-4 md:px-8">
        <h3 className="h1-like-text text-center xl:mt-4 2xl:mb-4 2xl:mt-12">Funcionalidad</h3>
        <p className="home-subtitle text-center mb-8 font-sans xl:mb-12">{functionalitySubSlogan || ''}</p>

        <FunctionalityCards functionality={functionality} />
      </section>

      {/* -------------- Gallery -------------- */}
      <section className="lg:mb-16 xl:mb-32">
        <div>
          <h3 className="h1-like-text text-center mr-4 xl:mt-4 2xl:mb-4 2xl:mt-12">Galer&iacute;a</h3>
          <p className="text-center subtitle-1 font-sans px-4 sm:px-0 mb-8 xl:mb-12">{gallerySubTitle || ''}</p>
          <div>
            <GalleryWithTabs />
          </div>
        </div>
      </section>

      {/* -------------- Choose Variant -------------- */}
      <section className="relative py-8 bg-neutral">
        <h1 className="text-center px-4 sm:px-0">{chooseVariantTitle}</h1>
        <ChooseModel />
      </section>
    </div>
  );
};

export default LandingModelsPage;
