'use client';
import * as React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { getImageDimensions } from '@sanity/asset-utils';

import { FaChevronRight } from 'react-icons/fa';
import { NewsSectionProps } from '@/types';

import Carousel, { ButtonGroupProps } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// const CarouselButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous }) => {
//   return (
//     <div className="relative w-full flex justify-between items-center -mt-16">
//       {/* Botón Izquierdo */}
//       <button
//         className="bg-transparent absolute left-0 sm:-left-10 xl:-left-14 z-10"
//         onClick={() => previous && previous()}
//       >
//         <Image
//           src="/carousel-left-arrow-grey.svg"
//           alt="Go to previous slide"
//           className="object-contain"
//           height={52}
//           width={52}
//         />
//       </button>

//       {/* Botón Derecho */}
//       <button
//         className="bg-transparent absolute right-0 sm:-right-10 xl:-right-14 z-10"
//         onClick={() => next && next()}
//       >
//         <Image
//           src="/carousel-right-arrow-grey.svg"
//           alt="Go to next slide"
//           className="object-contain"
//           height={52}
//           width={52}
//         />
//       </button>
//     </div>
//   );
// };

const NewsSection: React.FC<{ data: NewsSectionProps | null }> = ({ data }) => {
  const { title, news } = data ?? {};

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="relative  bg-white mt-10 mb-10 xl:mx-28" style={{padding:"3rem 1rem " }}>
      <div className="w-full sm:w-[90%] TituloCentrado">
        <h1 className="text-3xl font-[Verdana-bold] mb-6 xl:text-5xl">{title}</h1>
      </div>
                <Carousel
            arrows={false} // Ocultamos flechas
            autoPlay={true} // Activamos auto-play
            autoPlaySpeed={3000} // Ajustamos la velocidad (cada 3 segundos)
            infinite={true} // Permitimos que el carrusel repita en bucle
            showDots={false} // Ocultamos los indicadores si no los queremos
            responsive={responsive}
            partialVisible={false} // 🔥 Evita que los elementos queden cortados
            centerMode={false} // 🔥 Si quieres que siempre esté centrado, cámbialo a "true"
            slidesToSlide={1} // 🔥 Asegura que se desplace correctamente de uno en uno
            itemClass="px-2" // 🔥 Evita que los elementos queden cortados por márgenes
          >
        {news &&
          news?.map((item, index) => {
            const headerImageSrc = item.headerImage ? urlForImage(item.headerImage) : '';
            return (
              <div
                key={index}
                className="grid gap-2 justify-start grid-flow-col rounded-lg overflow-hidden w-full h-full"
                // className="grid grid-flow-row gap-4 justify-center sm:justify-start sm:grid-flow-col rounded-lg overflow-hidden w-full h-auto"
              >
                <div className="w-[150px] overflow-hidden rounded-lg self-start" style={{height:'95%'}}>
                  {headerImageSrc && (
                    <Image
                      src={headerImageSrc}
                      alt={'Toyota news Img'}
                      className="object-cover rounded-lg h-full"
                      width={getImageDimensions(headerImageSrc).width}
                      height={0}
                    />
                  )}
                </div>
                <div className="grid grid-flow-row" style={{alignItems:"strech"}}>
                
                  <div className="news-section-title mb-2">{item.newsTitle || ''}</div>
                  <p className="text-xs mb-4 sm:text-sm xl:text-base 2xl:text-lg">{item.subTitle || ''}</p>
                  <a
                      href={item?.slug?.current === 'takata' ? '/takata' : `noticias/${item?.slug?.current}`}
                      className="flex items-end text-xs underline sm:text-sm xl:text-base 2xl:text-lg lg:mb-0 mb-[10px]"
                    >
                      Más info+ <FaChevronRight className="inline-block ml-2 mb-[2px]" />
                    </a>
                </div>
              </div>
            );
          })}
      </Carousel>
    </section>
  );
};

export default NewsSection;
