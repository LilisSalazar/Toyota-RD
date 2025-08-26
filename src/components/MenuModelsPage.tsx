'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { urlForImage } from '@/sanity/lib/image';
import { FaChevronRight } from 'react-icons/fa6';
import { VehicleCategoryProps } from '@/types/VehicleCategory';
import { getImageDimensions } from '@sanity/asset-utils';
import { useRouter } from 'next/navigation';
import { useClose } from '@headlessui/react';

const MenuModelsPage: React.FC<{ data: VehicleCategoryProps[] | null; closeNavbar?: Function | null }> = ({
  data,
  closeNavbar,
}) => {
  let close = useClose();
  const categoryList = data ?? [];
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryList[0]?.categoryTitle);
  const router = useRouter();

  // useEffect(() => {
  //   const mainElement: HTMLElement | null = document.querySelector('.menu-vehicle-category main');
  //   const containerElement: NodeListOf<HTMLElement> = document.querySelectorAll('.menu-vehicle-category');
  //   console.log('Main height', mainElement?.offsetHeight);

  //   containerElement.forEach((element) => {
  //     // element.style.height = `${(mainElement?.offsetHeight ?? 0) + 96}px`;
  //     element.style.height = "100vh"
  //   });
  // }, []);
 
     useEffect(() => {
    const mainElement: HTMLElement | null = document.querySelector('.menu-vehicle-category main');
    const containerElement: NodeListOf<HTMLElement> = document.querySelectorAll('.menu-vehicle-category');
    console.log('Main height', mainElement?.offsetHeight);

    containerElement.forEach((element) => {
      // element.style.overflowY = "auto";
      // element.style.maxHeight = "calc(100vh - 200px)"; 
      // element.style.maxHeight = "calc(150vh)"; 
    });
  }, []);

  return (
    <div className="flex flex-col xl:flex-row xl:items-stretch menu-vehicle-category min-h-[100dvh] h-fit overflow-y-auto md:min-h-[780px]" >
      <aside className="w-auto  bg-[#F4F4F4] py-4 pl-0 lg:pl-4 lg:block lg:flex-none">
        <div className="ml-2 subtitle-1 font-sans pl-4 lg:pl-0 py-4 pr-8 text-center lg:text-left 2xl:py-6">
          {/* Todos los modelos */}
        </div>
        <ul className="flex flex-col xl:space-y-12 lg:block">
          {categoryList?.map((category) => {
            const categoryIconSrc = category.categoryIcon && urlForImage(category.categoryIcon);
            return (
              <li
                key={category.categoryTitle}
                className="group pl-4 lg:pl-0 pr-16 lg:pr-4"
                style={{ backgroundColor: category.categoryTitle === selectedCategory ? '#ECECEC' : 'transparent' }}
              >
                <button
                  onClick={() => setSelectedCategory(category.categoryTitle)}
                  className="flex  bg-transparent text-black items-center justify-between w-full p-2 subtitle-2 font-sans"
                >
                  {category.categoryIcon && categoryIconSrc ? (
                    <span className="flex items-center">
                      <Image
                        src={categoryIconSrc}
                        alt={category.categoryTitle}
                        quality={100}
                        unoptimized={true}
                        width={getImageDimensions(categoryIconSrc).width}
                        height={getImageDimensions(categoryIconSrc).height}
                        className="w-[20px] md:w-[30px] lg:w-[53px] mr-2 h-auto object-cover"
                      />
                      {category.categoryTitle || '-'}
                    </span>
                  ) : (
                    category.categoryTitle || '-'
                  )}

                  <span className="subtitle-2">
                    <FaChevronRight />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </aside>

      {/* {* TODO Revisar si 80vh esta bien o si quieren mantener 50vh para que entre todo en una pantalla. Sino con el 80vh se puede scrollear hasta la mitad del menu superior aprox. Tambien pueden optar por usar 100vh que hace que el menu se oculte pero se ve un espacio gris grande y feo*} */}
      <main className="flex-1 bg-neutral min-h-[80vh] sm:min-h-[50vh] sm:max-h-[50vh] sm:overflow-y-auto  md:min-h-screen md:max-h-none md:h-auto" >
        <div className="grid grid-cols-1 pr-12 pl-4 2xl:pl-4 sm:grid-cols-2 xl:grid-cols-3 gap-4 2xl:gap-x-16 pb-[80px] lg:pb-0">
          {categoryList
            ?.find((category) => category.categoryTitle === selectedCategory)
            ?.vehicles?.map((vehicle, index) => {
              const vehicleImageSrc = vehicle?.image ? urlForImage(vehicle?.image) : '';
              console.log(vehicle);
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-start cursor-pointer"
                  onClick={() => {
                    router.push(`/vehiculo/${vehicle.slug?.current}`);
                    close();
                    if (closeNavbar) {
                      closeNavbar();
                    }
                  }}
                >
                  <Image
                    src={vehicleImageSrc || ''}
                    alt={vehicle?.title}
                    quality={100}
                    unoptimized={true}
                    width={200}
                    height={150}
                    className="w-full h-auto object-cover rounded-lg pt-6 md:pt-0"
                  />
                  <div className='flex items-center justify-between flex-col h-full'>
                    <div className="subtitle-1 font-['Verdana-bold'] text-center">{vehicle?.title || '-'}</div>
                    <p className="text-[#727176] text-center pt-2 pb-2">
                      Desde USD${vehicle?.price.toLocaleString('en-US', { minimumFractionDigits: 2 }) || '-'}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
};

export default MenuModelsPage;
