'use client';
import * as React from 'react';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import { getImageDimensions } from '@sanity/asset-utils';
import Carousel from 'react-multi-carousel';
import { ButtonGroupProps } from 'react-multi-carousel/lib/types';
import 'react-multi-carousel/lib/styles.css';
import { TakataPageProps } from '@/types/TakataPage';
import { checkChasis } from '@/helpers/chasischeck';

const CarouselButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => {
  return (
    <div className="carousel-button-group">
      <button className="bg-transparent absolute top-1/4 left-[5%] sm:left-[2%] md:left-[5%]" onClick={() => previous && previous()}>
        <Image
          src="/carousel-left-arrow.svg"
          alt="Go to previous slide"
          width={20} // Tamaño pequeño por defecto
          height={25}
          className="sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-7 lg:h-7 xl:w-7 xl:h-7"
        />
      </button>
      <button className="bg-transparent absolute top-1/4 right-[5%] sm:right-[2%] md:right-[5%]" onClick={() => next && next()}>
        <Image
          src="/carousel-right-arrow.svg"
          alt="Go to next slide"
          width={20} // Tamaño pequeño por defecto
          height={25}
          className="sm:w-7 sm:h-7 md:w-7 md:h-7 lg:w-7 lg:h-7 xl:w-7 xl:h-7"
        />
      </button>
    </div>
  );
};

const TakataPage: React.FC<{ data: TakataPageProps | null }> = ({ data }) => {
  const [chasisNumber, setChasisNumber] = React.useState('');
  const [responseMessage, setResponseMessage] = React.useState('');
  const [whatsappLink, setWhatsappLink] = React.useState(false);
  const { backgroundHeaderImg, heroLogo, heroText, footerImg, footerTitle, subHeaderImg, carrouselFeature } =
    data ?? {};

  const backgroundHeaderImgSrc = backgroundHeaderImg ? urlForImage(backgroundHeaderImg) : '';
  const footerImgSrc = footerImg ? urlForImage(footerImg) : '';
  const heroLogoSrc = heroLogo ? urlForImage(heroLogo) : '';

  const originalWidth = 1920;
  const originalHeight = 689;

  const handleChasisCheck = async (chasisNumber:string) => {
    setWhatsappLink(false);
    const response = await checkChasis(chasisNumber);
    if (response.success) {
      setResponseMessage(response.message);
      setWhatsappLink(false);
    } else {
      setResponseMessage(response.message);
      setWhatsappLink(true);
    }
  }

  const updateImageHeight = () => {
    const newWidth = window.innerWidth;
    const newHeight = (originalHeight * newWidth) / originalWidth;
    const carouselRootElements: NodeListOf<HTMLElement> = document.querySelectorAll('.hero-container');
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

  const carouselResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 425 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 425, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="overflow-hidden">
      <section className="w-full overflow-hidden">
        <div
          className="hero-container w-full relative flex flex-row justify-center items-center space-x-6"
          style={{
            backgroundImage: `url(${backgroundHeaderImgSrc})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundClip: 'content-box',
            backgroundPosition: 'right',
          }}
        >
          <div className="absolute inset-y-0 right-0 flex flex-col justify-evenly items-center w-[75%]">
            <div className="w-[80%] text-white text-right">
              <div className="flex flex-col items-center">
                {heroLogoSrc && (
                  <Image
                    src={heroLogoSrc}
                    alt="Hero logo"
                    width={getImageDimensions(heroLogoSrc).width}
                    height={getImageDimensions(heroLogoSrc).height}
                    className="w-[25px] sm:w-[45px] md:w-[50px] lg:w-[65px] xl:w-[100px] 2xl:w-auto"
                  />
                )}
              </div>
              {heroText?.map((paragraph, index) => (
                <PortableText
                  key={index}
                  value={paragraph}
                  components={{
                    block: {
                      normal: ({ children }) => <div className="takata-hero-text">{children || ''}</div>,
                    },
                    marks: {
                      strong: ({ children }) => <span className="font-[Verdana-bold]">{children}</span>,
                    },
                  }}
                />
              ))}
            </div>
            <div className="w-full flex flex-row justify-evenly">
              {subHeaderImg?.map((item, index) => {
                const featureImg = item ? urlForImage(item) : '';
                return (
                  <div key={index}>
                    {featureImg && (
                      <Image
                        src={featureImg}
                        alt={`Sub header Img`}
                        objectFit="cover"
                        width={getImageDimensions(featureImg).width}
                        height={getImageDimensions(featureImg).height}
                        loading="lazy"
                        className="w-[50px] md:w-[100px] lg:w-[110px] xl:w-[160px] 2xl:w-[210px]"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <Carousel
          arrows={false}
          responsive={carouselResponsive}
          renderArrowsWhenDisabled={true}
          renderButtonGroupOutside={true}
          customButtonGroup={<CarouselButtonGroup />}
          containerClass="w-9/12 mt-12 md:mt-24 mx-auto"
          infinite={true}
        >
          {carrouselFeature &&
            carrouselFeature.map((item, index) => {
              const carrouselImg = item?.carrouselImg ? urlForImage(item?.carrouselImg) : '';
              return (
                <div key={index} className="flex flex-col items-center py-4 px-0 md:px-4">
                  <div className="2xl:mx-[20px]">
                    {carrouselImg && (
                      <Image
                        src={carrouselImg || ''}
                        alt={`Carrousel Image`}
                        width={getImageDimensions(carrouselImg).width}
                        height={getImageDimensions(carrouselImg).height}
                        loading="lazy"
                        className="object-cover h-[90px] w-[150px] md:w-[250px] md:h-[150px] xl:w-[300px] xl:h-[180px] 2xl:w-[400px] 2xl:h-[250px]"
                      />
                    )}
                  </div>
                  <div>
                    <div className="takata-text subtitle-2 uppercase">{item?.carrouselTitle || ''}</div>
                  </div>
                  <div>
                    <div className="takata-text subtitle-2 whitespace-nowrap">{item?.carrouselDescription || ''}</div>
                  </div>
                </div>
              );
            })}
        </Carousel>
      </section>

      <section className="mt-8 md:mt-16 mb-10">
        <div className="grid grid-cols-1 items-center px-8 space-y-4 space-x-0 md:grid-cols-2 md:space-x-8 md:space-y-0 lg:ml-16 xl:px-16">
          <div className="flex flex-col h-full space-y-4 justify-start">
            <h1 className="leading-none">{footerTitle}</h1>
            <div className="subtitle-1 font-sans mt-2 xl:mt-6">Ingresa el número de chasis para verificar</div>
            <div className="flex flex-col xs:flex-row space-y-4 xs:space-y-0 space-x-0 xs:space-x-4">
              <input
                type="text"
                placeholder="Chasis"
                value={chasisNumber}
                onChange={(e) => setChasisNumber(e.target.value)}
                className="border bg-[#F2F4F8] border-[#737373] rounded-none w-full py-2 px-4 xs:w-44 md:w-56 xl:w-[420px]"
              />
              <button
                disabled={chasisNumber.length === 0}
                type="submit"
                className={`rounded-full  text-center font-[Verdana-bold] px-5 py-2 ${chasisNumber.length === 0 && 'bg-gray-400'}  `}
                onClick={() => handleChasisCheck(chasisNumber)}
              >
                Verificar
              </button>
            </div>
            {responseMessage && (
              <p className="text-sm mt-2 text-gray-600">{responseMessage}</p>
            )}
            {whatsappLink && (
              <button onClick={() => window.open('https://wa.me/18492580765', '_blank')} className={`rounded-full text-center font-[Verdana-bold] text-sm py-2 px-4 bg-[#25D366] w-[150px] flex items-center justify-center gap-2`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                Whatsapp
              </button>
            )}
          </div>
          <div className="">
            {footerImgSrc && (
              <Image
                src={footerImgSrc}
                alt={'Footer img'}
                width={getImageDimensions(footerImgSrc).width}
                height={getImageDimensions(footerImgSrc).height}
                className="w-auto lg:w-[80%]"
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TakataPage;
