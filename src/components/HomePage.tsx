'use client';
import Image from 'next/image';
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { urlForImage } from '@/sanity/lib/image';
import { HomePageProps, HeroItem, VehicleCategoryProps, VehicleForCategory } from '@/types';
import * as React from 'react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Flowbite, Card, Carousel as FlowbiteCarousel } from 'flowbite-react';
import { getImageDimensions } from '@sanity/asset-utils';
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import NewsSection from './NewsSection';
import useEmblaCarousel from 'embla-carousel-react';

interface HeroCarouselProps {
  heroCarousel: HeroItem[];
}

/* Hero Carousel */
const HeroCarousel: React.FC<HeroCarouselProps> = ({ heroCarousel }) => {
  const customTheme: CustomFlowbiteTheme = {
    carousel: {
      root: {
        base: 'relative w-full xl:h-full',
      },
      indicators: {
        active: {
          off: 'bg-[#C7C7C7] hover:bg-neutral ',
          on: 'bg-white',
        },
        base: 'h-3 w-3 rounded-full',
        wrapper: 'absolute bottom-1/2 left-4 lg:left-10 flex flex-col space-y-3',
      },
      scrollContainer: {
        base: 'flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth xl:rounded-lg',
        snap: 'snap-x',
      },
    },
  };

  const router = useRouter();

  return (
    <Flowbite theme={{ theme: customTheme }}>
      <FlowbiteCarousel slide={false} leftControl="&nbsp;" rightControl="&nbsp;" className="xl:p-24">
        {heroCarousel?.map((slide, index) => {
          const heroImg = slide.image ? urlForImage(slide.image) : '';
          const heroMobileImg = slide.mobileImage ? urlForImage(slide.mobileImage) : '';
          const heroLogo = slide.logo ? urlForImage(slide.logo) : '';

          return (
            <React.Fragment key={`hero-slide-${index}`}>
              {/* Desktop version */}
              <div
                className="hidden lg:block relative w-full xl:rounded-lg lg:h-[405px] xl:h-[493px] 2xl:h-[683px]"
                style={{
                  backgroundImage: `url(${heroImg})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundClip: 'content-box',
                  // backgroundPosition: 'right',
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-evenly items-center w-[35%]">
                  <div className="flex flex-col items-center">
                    <div className="flex flex-col items-center xs:-mb-2 xl:mt-28">
                      <h1 className="text-white font-[Eurostile-Extended] text-[32px] lg:text-[28px] xl:text-[32px] leading-none uppercase w-full max-w-xs text-center md:max-w-[180px] lg:max-w-[300px] xl:max-w-sm 2xl:max-w-[600px]">
                        {slide.title}
                      </h1>
                      <h1 className="text-white font-[Eurostile-Extended] text-[64px] lg:text-[56px] xl:text-[64px] leading-none uppercase w-full max-w-xs text-center md:max-w-[180px] lg:max-w-[300px] xl:max-w-sm 2xl:max-w-[600px]">
                        {slide.titleSndLine}
                      </h1>
                    </div>
                    <p className="text-white text-center tracking-widest uppercase text-lg  max-w-xs xs:text-xs md:max-w-[180px] lg:max-w-[300px] lg:text-lg xl:text-2xl 2xl:text-3xl 2xl:max-w-[600px] mt-4">
                      {slide.subtitle}
                    </p>
                  </div>
                  <div className="">
                    <button
                      onClick={() => router.push('/test-drive')}
                      className="font-[Verdana-bold] rounded-full py-2 mb-4 xs:w-32 md:w-[165px] lg:mb-12 lg:w-52 xl:w-64 2xl:w-60"
                    >
                      Solicitar Test Drive
                    </button>
                  </div>
                </div>
                {heroLogo && (
                  <div className="absolute bottom-0 right-0 mb-[2%] mr-[2%]">
                    <Image
                      src={heroLogo ? heroLogo : ''}
                      alt="Hero logo"
                      width={120}
                      height={120}
                      className="object-contain xs:w-[35px] xs:h-[35px] md:w-[60px] md:h-[60px] lg:w-[80px] lg:h-[80px] xl:w-[100px] xl:h-[100px] 2xl:w-[150px] 2xl:h-[150px]"
                    />
                  </div>
                )}
              </div>
              {/* Mobile version */}
              <div
                className="lg:hidden relative w-full h-[438px] xs:h-[496px] md:h-[897px]"
                style={{
                  backgroundImage: `url(${heroMobileImg})`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundClip: 'content-box',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-between">
                  <div className="text-left space-y-2 md:space-y-4">
                    <div className="flex flex-col items-center mt-8 xs:mt-12 md:mt-[70px] md:ml-[15%] md:leading-none md:max-w-[400px]">
                      <h1 className="text-white font-[Eurostile-Extended] text-[24px] md:text-[32px] leading-none uppercase w-full text-center">
                        {slide.title}
                      </h1>
                      <h1 className="text-white font-[Eurostile-Extended] text-[48px] md:text-[64px] leading-none uppercase w-full max-w-xs text-center">
                        {slide.titleSndLine}
                      </h1>
                    </div>
                    <p className="text-white text-center tracking-widest uppercase max-w-full md:max-w-xs ml-0 md:ml-[20%]">
                      {slide.subtitle}
                    </p>
                  </div>

                  {heroLogo && (
                    <div className="flex justify-end">
                      <Image
                        src={heroLogo ? heroLogo : ''}
                        alt="Hero logo"
                        width={120}
                        height={120}
                        className="object-contain -mt-12 mr-4 mb-4 w-[75px] h-[75px] md:w-[150px] md:h-[150px] md:mb-12 md:mr-14"
                      />
                    </div>
                  )}
                </div>
                <div className="absolute bottom-0 left-0">
                  <button
                    onClick={() => router.push('/test-drive')}
                    className="font-[Verdana-bold] py-1 px-2 text-xs rounded-full m-4 sm:py-2 sm:px-6 sm:text-base sm:mb-20 sm:ml-0 md:ml-14"
                  >
                    Solicitar Test Drive
                  </button>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </FlowbiteCarousel>
    </Flowbite>
  );
};

const HomePage: React.FC<{ data: HomePageProps | null; vehicleData: VehicleCategoryProps[] }> = ({
  data,
  vehicleData,
}) => {
  const {
    heroCarousel,
    exploreTitle,
    searchConcessionaireImg,
    searchConcessionaireTitle,
    scheduleMaintenanceTitle,
    scheduleMaintenanceImgMobile,
    scheduleMaintenanceSubTitle,
    scheduleMaintenanceLogo,
    scheduleMaintenanceImgLeft,
    scheduleMaintenanceImgRight,
    scheduleMaintenanceImgRightSmallDesktop,
    subFooterImgLeft,
    subFooterTitleLeft,
    subFooterSubTitleLeft,
    subFooterImgRight,
    subFooterTitleRight,
    subFooterSubTitleRight,
    subFooterImgvw,
    subFooterTitlevw,
    subFooterSubTitlevw,
    newsSectionTitle,
    news,
  } = data ?? {};

  const router = useRouter();

  const subFooterImgLeftSrc = subFooterImgLeft ? urlForImage(subFooterImgLeft) : '';
  const subFooterImgRightSrc = subFooterImgRight ? urlForImage(subFooterImgRight) : '';
  const subFooterImgvwSrc = subFooterImgvw ? urlForImage(subFooterImgvw) : '';
  
  const scheduleMaintenanceImgMobileUrl = scheduleMaintenanceImgMobile ? urlForImage(scheduleMaintenanceImgMobile) : '';
  const scheduleMaintenanceImgLeftUrl = scheduleMaintenanceImgLeft ? urlForImage(scheduleMaintenanceImgLeft) : '';
  const scheduleMaintenanceImgRightUrl = scheduleMaintenanceImgRight ? urlForImage(scheduleMaintenanceImgRight) : '';
  const scheduleMaintenanceLogoSrc = scheduleMaintenanceLogo ? urlForImage(scheduleMaintenanceLogo) : '';
  const searchDealerImgUrl = searchConcessionaireImg ? urlForImage(searchConcessionaireImg) : '';

  const vehicleDataMapped = vehicleData;

  function BasicTabs() {
    const [selectedTab, setSelectedTab] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel({
      align: 'center',
      loop: true,
      skipSnaps: false,
      containScroll: false,
      startIndex: 1,
      slidesToScroll: 1,
      duration: 20
    });

    const [selectedIndex, setSelectedIndex] = useState(1);

    useEffect(() => {
      if (emblaApi) {
        const onSelect = () => {
          setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on('select', onSelect);
        emblaApi.on('reInit', onSelect);

        // Reselect center item on tab change
        emblaApi.scrollTo(1);

        return () => {
          emblaApi.off('select', onSelect);
          emblaApi.off('reInit', onSelect);
        };
      }
    }, [emblaApi, selectedTab]);

    const scrollPrev = useCallback(() => {
      if (emblaApi) {
        emblaApi.scrollPrev();
      }
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, [emblaApi]);

    return (
      <div className="relative w-screen flex flex-col items-center">
        <TabGroup className="w-full sm:w-[90%] xl:w-[70%]" selectedIndex={selectedTab} onChange={setSelectedTab}>
          <TabList className="flex items-center max-sm:items-end justify-center w-full overflow-x-auto">
            {vehicleDataMapped?.map((category, index) => {
              const categoryIconSrc = category.categoryIcon && urlForImage(category.categoryIcon);
              return (
                <Tab
                  className="bg-transparent flex items-center text-black outline-none home-tab-title font-sans max-xs:text-[10px] max-sm:text-[12px] py-4 lg:py-6 px-4 max-sm:px-1 lg:px-8 xl:px-6 border-b-4 border-b-[#dbdbdb] data-[selected]:border-b-black border-solid"
                  key={index}
                >
                  {category.categoryIcon && categoryIconSrc && (
                    <Image
                      src={categoryIconSrc}
                      alt={category.categoryTitle}
                      width={getImageDimensions(categoryIconSrc).width}
                      height={getImageDimensions(categoryIconSrc).height}
                      className="w-[20px] md:w-[30px] lg:w-[40px] xl:w-[42px] h-auto object-cover"
                    />
                  )}
                  {category?.categoryTitle || ''}
                </Tab>
              );
            })}
          </TabList>
          <TabPanels>
            {vehicleDataMapped?.map((vehicles, index) => {
              const slides = vehicles.vehicles || [];
              // Manejo especial para un solo elemento
              const duplicatedSlides = slides.length === 1 
                ? slides // No duplicamos si hay un solo elemento
                : slides.length <= 3 
                  ? [...slides, ...slides, ...slides] // Triplicamos para 2-3 elementos
                  : [...slides, ...slides, ...slides]; // Añadimos 2 elementos extra para transición suave

              return (
                <TabPanel key={index} className="pt-12 w-full">
                  <div className={`relative embla ${slides.length === 1 ? 'embla-single' : ''}`}>
                    <div className="embla__viewport" ref={emblaRef}>
                      <div className="embla__container">
                        {Array.isArray(duplicatedSlides) &&
                          duplicatedSlides.length > 0 &&
                          duplicatedSlides.map((vehicle: VehicleForCategory | null, vehicleIndex: number) => {
                            if (!vehicle) return null;

                            const vehicleImg = vehicle?.image ? urlForImage(vehicle?.image) : '';
                            const isSelected = slides.length === 1 ? true : selectedIndex === vehicleIndex;

                            return (
                              <div 
                                key={`${vehicleIndex}-${vehicle.slug?.current}`}
                                className={`embla__slide ${isSelected ? 'embla__slide--current' : ''} ${
                                  slides.length === 1 ? 'embla__slide--single' : ''
                                }`}
                              >
                                <div className={`transition-all duration-300 ease-in-out ${
                                  slides.length === 1 ? 'scale-105' : isSelected ? 'scale-105' : 'scale-90 opacity-80'
                                }`}>
                                  <div className="flex flex-col justify-between rounded-t-lg bg-gradient-to-b from-neutral p-4">
                                    <div className="subtitle-2 text-center pt-4">{vehicle?.model || ''}</div>
                                    <p className="text-center pb-4 text-[#727176]">{vehicle?.shortDescription || ''}</p>
                                    {vehicleImg && (
                                      <div className="min-h-[220px] flex items-center justify-center">
                                        <Image
                                        className="w-full transition-transform duration-300 ease-in-out"
                                        src={vehicleImg}
                                        quality={100} 
                                        unoptimized={true}
                                        alt={vehicle?.model || ''}
                                        width={getImageDimensions(vehicleImg).width}
                                        height={getImageDimensions(vehicleImg).height}
                                      />
                                      </div>
                                    )}
                                    <p>Desde</p>
                                    <p className="font-[Verdana-bold]">
                                      USD${vehicle?.price.toLocaleString('en-US', { minimumFractionDigits: 2 }) || ''}
                                    </p>
                                    <button
                                      onClick={() => router.push(`/vehiculo/${vehicle.slug?.current}`)}
                                      className="font-[Verdana-bold] block mx-auto mt-2 py-2 px-8 xl:px-12 rounded-full hover:bg-red-600 xl:mt-4 cursor-pointer transition-colors duration-300font-[Verdana-bold] block mx-auto mt-2 py-1 px-2 text-xs sm:py-2 sm:px-6 sm:text-base xl:px-12 xl:mt-4 rounded-full hover:bg-red-600 cursor-pointer transition-colors duration-300"
                                    >
                                      Ver Modelo
                                    </button>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                    {/* Mostrar botones solo si hay más de un elemento */}
                    {slides.length > 1 && (
                      <>
                        <button
                        className=" bg-transparent absolute top-1/2 left-[1%] sm:left-[5%] xl:left-[-5%]"
                        onClick={scrollPrev}
                      >
                        <Image
                          src="/carousel-left-arrow-grey.svg"
                          alt="Go to previous slide"
                          className="object-contain"
                          height={52}
                          width={52}
                        />
                      </button>
                      <button
                        className="bg-transparent absolute top-1/2 right-[1%] sm:right-[5%] xl:right-[-5%]"
                        onClick={scrollNext}
                      >
                        <Image
                          src="/carousel-right-arrow-grey.svg"
                          alt="Go to next slide"
                          className="object-contain"
                          height={52}
                          width={52}
                        />
                      </button>
                      </>
                    )}
                  </div>
                </TabPanel>
              );
            })}
          </TabPanels>
        </TabGroup>
      </div>
    );
  }



  return (
    <div>
      {/* Hero models Section */}
      <section className="bg-[#E8E8E8]">
        <HeroCarousel heroCarousel={heroCarousel ?? []} />
      </section>

      {/* Explore models Section */}
      <section className="mt-10 mb-10">
        <h1 className="text-center">{exploreTitle || ''}</h1>
        <BasicTabs />
      </section>

      {/* Search Concessionaire Section */}
      <section className="flex flex-col lg:flex-row mx-0 lg:mx-6 mt-12 mb-10 overflow-visible h-auto lg:h-[250px] xl:h-[340px] 2xl:mx-32">
        <div className="w-screen lg:w-[48%] h-[350px] lg:h-auto relative bg-sky-300 rounded-none lg:rounded-tl-xl lg:rounded-bl-xl">
          {searchDealerImgUrl && (
            <Image
              src={searchDealerImgUrl}
              alt={'Search Concessionaire Img'}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="absolute bottom-0 rounded-none lg:rounded-l-xl object-cover"
              priority={false}
            />
          )}
        </div>
        <div className="w-screen lg:w-1/2 space-y-2 pt-8 lg:pt-0 flex flex-col items-center lg:items-[normal] justify-center pl-8 lg:pl-12 pr-8 bg-transparent lg:bg-neutral rounded-tr-xl rounded-br-xl">
          <h2 className="mb-2 sm:mb-4 leading-none">{searchConcessionaireTitle}</h2>
          <button
            onClick={() => router.push('/dealers')}
            className="bg-black font-[Verdana-bold] text-sm px-8 py-1 rounded-full self-center xs:flex xs:justify-center xs:items-center 
             sm:text-sm sm:px-6 sm:py-2 lg:text-base lg:px-24 lg:self-start"
          >
            Buscar
          </button>
        </div>
      </section>

      {/* Schedule Maintenance Section */}
      <section className="overflow-visible safari-overflow-fix mt-12 bg-neutral">
  <div className="relative py-16 overflow-hidden">
    <div className='h-full object-contain'>
      {/* Imagen izquierda - Mobile / Desktop */}
    {scheduleMaintenanceImgLeftUrl && (
      <Image
        src={scheduleMaintenanceImgLeftUrl}
        alt="Schedule Maintenance Left Img"
        fill
        sizes="100vw"
        className='absolute top-0 left-0 z-[50] pt-6 transition-all duration-300 ease-in-out object-contain'
        priority={false}
      />
    )}

    {/* Imagen derecha - Small Desktop */}
    {scheduleMaintenanceImgRightUrl && (
      <Image
        src={scheduleMaintenanceImgRightUrl}
        alt="Schedule Maintenance Right Img - Small desktop"
        fill
        sizes="100vw"
        className='absolute top-0 right-0 z-[50] pt-6 transition-all duration-300 ease-in-out object-contain max-lg:hidden'
        priority={false}
      />
    )}

    {/* Imagen derecha - XL */}
    {/* {scheduleMaintenanceImgRightUrl && (
      <Image
        src={scheduleMaintenanceImgRightUrl}
        alt="Schedule Maintenance Right Img"
        className="xl:block absolute right-0 w-[30%] xl:w-[38%] 2xl:w-[34%] bottom-0 object-cover object-bottom h-80 xl:h-[110%] 2xl:h-[108%]"
        width={getImageDimensions(scheduleMaintenanceImgRightUrl).width}
        height={getImageDimensions(scheduleMaintenanceImgRightUrl).height}
      />
    )} */}

    {/* Imagen móvil extra */}
    {/* {scheduleMaintenanceImgMobileUrl && (
      <Image
        src={scheduleMaintenanceImgMobileUrl}
        alt="Schedule Maintenance Mobile Img"
        className="hidden sm:block lg:hidden absolute w-[43%] md:w-[32%] bottom-0 left-0 object-cover object-bottom h-[22rem] md:h-auto"
        width={getImageDimensions(scheduleMaintenanceImgMobileUrl).width}
        height={getImageDimensions(scheduleMaintenanceImgMobileUrl).height}
      />
    )} */}
    </div>

    {/* Contenido */}
    <div className="flex flex-col relative z-10 mr-2 xs:mr-4 sm:mr-[7%] ml-auto lg:mx-auto items-center justify-center text-center w-[45%] xs:w-[55%] sm:w-[50%] lg:w-[35%] xl:w-[30%] transition-all duration-300 ease-in-out h-full">
      {scheduleMaintenanceLogoSrc && (
        <Image
          src={scheduleMaintenanceLogoSrc}
          alt="Logo Schedule"
          width={getImageDimensions(scheduleMaintenanceLogoSrc).width}
          height={getImageDimensions(scheduleMaintenanceLogoSrc).height}
          className="mb-2 mt-2 w-[36px] sm:w-[50px] lg:w-[60px] 2xl:w-[70px]"
        />
      )}

      <h2 className="text-base  xl:text-[32px] 2xl:text-[40px] leading-none xs:mb-2">
        {scheduleMaintenanceTitle}
      </h2>

      <div className="text-xs sm:text-base xl:text-[18px] 2xl:text-[21px] subtitle-1 font-sans leading-tight tracking-tight text-black mb-4 xs:mt-2 2xl:mt-4 xl:mb-12">
        {scheduleMaintenanceSubTitle}
      </div>

      <button
        onClick={() => router.push('/taller')}
        className="font-[Verdana-bold] text-xs px-3 py-1 sm:text-sm sm:px-6 sm:py-2 lg:text-base lg:px-12 rounded-full 2xl:mt-4"
      >
        ¡Haz tu cita!
      </button>
    </div>
  </div>
      </section>


      {/* Sub Footer Section */}
      <section className="mt-16 xl:mx-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* TARJETA IZQUIERDA */}
          <div className="mx-4 sm:mx-12 lg:mx-4 xl:mr-4">
            <Card
              className="bg-neutral rounded-2xl h-full flex flex-col"
              renderImage={() => (
                <Image
                  className="rounded-t-lg h-1/2 w-full object-cover"
                  width={getImageDimensions(subFooterImgLeftSrc || '').width}
                  height={getImageDimensions(subFooterImgLeftSrc || '').height}
                  src={subFooterImgLeftSrc || ''}
                  alt={subFooterTitleLeft || ''}
                />
              )}
            >
              <div className="flex flex-col flex-1 justify-between items-center text-center px-4 py-4">
        <div>
          <h3 className="text-base sm:text-lg font-semibold mt-3">{subFooterTitleLeft || ''}</h3>
          <p className="mt-2 text-sm sm:text-base">{subFooterSubTitleLeft || ''}</p>
        </div>
        <button
          onClick={() => router.push('/takata')}
          className="bg-black text-white font-[Verdana-bold] mt-4 px-4 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base rounded-3xl"
        >
          Saber más
        </button>
      </div>
            </Card>
          </div>

          {/* TARJETA DERECHA */}
          <div className="mx-4 sm:mx-12 lg:mx-4 xl:mr-4">
            <Card
              className="bg-neutral rounded-2xl h-full flex flex-col"
              renderImage={() => (
                <Image
                  className="rounded-t-lg h-1/2 w-full object-cover"
                  width={getImageDimensions(subFooterImgRightSrc || '').width}
                  height={getImageDimensions(subFooterImgRightSrc || '').height}
                  src={subFooterImgRightSrc || ''}
                  alt={subFooterTitleRight || ''}
                />
              )}
            >
              <div className="flex flex-col flex-1 justify-between items-center text-center px-4 py-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mt-3">{subFooterTitleRight || ''}</h3>
                  <p className="mt-2 text-sm sm:text-base">{subFooterSubTitleRight || ''}</p>
                </div>
                <button
                  onClick={() => router.push('/repuestos')}
                  className="bg-black text-white font-[Verdana-bold] mt-4 px-4 py-1.5 sm:px-6 sm:py-2 text-sm sm:text-base rounded-3xl"
                >
                  Solicitar
                </button>
              </div>
            </Card>
          </div>
        </div>
      </section>  
        <section className="w-full mt-16"> 
  <div className="text-center">
    {subFooterImgvwSrc && (
      <Image
        className="mx-auto rounded-lg w-full max-h-[400px] object-cover mb-6"
        width={getImageDimensions(subFooterImgvwSrc).width}
        height={getImageDimensions(subFooterImgvwSrc).height}
        src={subFooterImgvwSrc}
        alt={subFooterTitlevw || ''}
      />
    )}

    <h3 className="text-lg sm:text-xl md:text-3xl font-semibold mb-4">
      {subFooterTitlevw || ''}
    </h3>
    <p className="text-sm sm:text-base md:text-lg mb-6 mx-4 text-center">
      {subFooterSubTitlevw || ''}
    </p>
    
    <button
      onClick={() => router.push('/nosotros')}
      className="bg-black font-[Verdana-bold] text-sm sm:text-base text-white px-4 py-1.5 sm:px-6 sm:py-2 rounded-3xl"
    >
      Saber más
    </button>
  </div>
        </section>
      {/* Toyota News Section */}
      <NewsSection data={{ title: newsSectionTitle || '', news: news || [] }} />
    </div>
  );
};

export default HomePage;
