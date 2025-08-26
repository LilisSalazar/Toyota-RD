'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MdClose } from 'react-icons/md';
import { FaChevronDown } from 'react-icons/fa6';
import { CloseButton, Dialog, DialogPanel, Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '@/sanity/lib/image';
import { VehicleCategoryProps, NavigationProps } from '@/types';
import MenuModelsPage from './MenuModelsPage';

const Navigation: React.FC<{ data: NavigationProps | null; modelsData: VehicleCategoryProps[] | null }> = ({
  data,
  modelsData,
}) => {
  const { title, items, logo } = data ?? {};
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuModelsOpen, setMobileMenuModelsOpen] = useState(false);
  const [modelMenuOpen, setModelMenuOpen] = useState(false);
  const navLogoSrc = logo ? urlForImage(logo) : '';
  const router = useRouter();
  useEffect(() => {
    console.log('Toggle fixed body', modelMenuOpen);
    if (modelMenuOpen) {
      document.body.classList.add('fixed');
    } else {
      document.body.classList.remove('fixed');
    }
    return () => document.body.classList.remove('fixed');
  }, [modelMenuOpen]);
  const [showCompactMenu, setShowCompactMenu] = useState(false);
const [isCompactNav, setIsCompactNav] = useState(false);

useEffect(() => {
  const handleResize = () => {
    const width = window.innerWidth;
    setIsCompactNav(width >= 1280 && width < 1360);
    if (width >= 1360) setShowCompactMenu(false);
  };

  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);
  return (
    <nav className="bg-white w-screen">
      {/* Desktop version */}
      <div className="nav-desktop mx-0 xs:mx-4  2xl:mx-27 px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-24 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center xl:hidden">
            <button
              className="bg-transparent text-black relative inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white gap-2"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Image src="/menu-mobile-icon.svg" width={22} height={16} alt="Menu Icon" /> Menu
            </button>
          </div>
          <div className="flex flex-1 items-center justify-start sm:items-stretch">
            <div className="flex flex-shrink-0 items-center">
              {navLogoSrc && (
                <Link href="/" passHref>
                <Image
                  className="h-6 sm:h-8 w-auto cursor-pointer"
                  src={navLogoSrc}
                  alt="Nav Logo"
                  width={getImageDimensions(navLogoSrc).width}
                  height={getImageDimensions(navLogoSrc).height}
                />
              </Link>
              )}
            </div>
            <div className="hidden sm:ml-6 xl:flex sm:flex-1 sm:justify-center">
              <div className="flex space-x-4">
                {!isCompactNav && (
                  <Link href="/" className="rounded-md px-3 py-2 2xl:py-3">
                    Inicio
                  </Link>
                )}
                <Popover className="isolate z-50">
                  {({ open }) => {
                    setModelMenuOpen(open);

                    return (
                      <>
                        <PopoverButton className="link-like-text bg-transparent text-black inline-flex outline-none items-center px-3 py-2 2xl:py-3 gap-x-1">
                          Modelos
                          <FaChevronDown aria-hidden="true" />
                        </PopoverButton>
                        <PopoverPanel
                          transition
                          className="fixed w-screen h-screen inset-x-0 top-0 z-10 overflow-y-auto overscroll-y-contain scrolling-auto bg-white mt-24 shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:-translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div className="bg-neutral flex py-2 pl-2 pr-6 items-center justify-end fixed right-0">
                            <CloseButton
                              type="button"
                              onClick={() => setMobileMenuModelsOpen(false)}
                              className="bg-transparent -m-2.5 rounded-md p-2.5 text-gray-700"
                            >
                              <MdClose aria-hidden />
                              <span className="sr-only">Close menu</span>
                            </CloseButton>
                          </div>
                          <MenuModelsPage data={modelsData} />
                        </PopoverPanel>
                      </>
                    );
                  }}
                </Popover>
                {items &&
                  items?.map((item, index: number) => (
                    <Link
                      key={index}
                      href={`/${item.url?.internalLink?.current ?? item.url?.externalUrl ?? ''}`}
                      className="rounded-md px-3 py-2 2xl:py-3"
                    >
                      {item.label}
                    </Link>
                  ))}
              </div>
            </div>
          </div>
          {/* <div className="hidden xl:flex gap-2 h-10 items-center relative">
            {isCompactNav ? (
              <div className="relative">
                <button
                  onClick={() => setShowCompactMenu(!showCompactMenu)}
                  className="rounded-full border-2 border-red p-2 "
                  aria-label="Opciones de contacto"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>

                
                <div
                  className={`absolute right-0 mt-2 z-50 w-52 transform transition-all duration-200 ease-out ${showCompactMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                    }`}
                >
                  <div className="space-y-2 bg-white border rounded-lg shadow-lg p-2">
                    <button
                      onClick={() => {
                        router.push('/contacto');
                        setShowCompactMenu(false);
                      }}
                      className="w-full bg-white text-red text-left px-4 py-2 text-sm  border border-red rounded-2xl"
                    >
                      Contáctanos
                    </button>
                    <button
                      onClick={() => {
                        router.push('/test-drive');
                        setShowCompactMenu(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm border border-red rounded-2xl"
                    >
                      Solicitar Test Drive
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <button
                  onClick={() => router.push('/contacto')}
                  className="bg-white rounded-3xl px-4 border-2 border-red text-red"
                >
                  Contáctanos
                </button>
                <button
                  onClick={() => router.push('/test-drive')}
                  className="rounded-3xl px-4 border-2 border-red"
                >
                  Solicitar Test Drive
                </button>
              </>
            )}
          </div> */}
          <div className="hidden xl:flex gap-2 h-10 items-center relative">
  <button
    onClick={() => router.push('/contacto')}
    className="bg-white rounded-3xl px-4 border-2 border-red text-red"
  >
    Contáctanos
  </button>
  <button
    onClick={() => router.push('/test-drive')}
    className="rounded-3xl px-4 border-2 border-red"
  >
    Solicitar Test Drive
  </button>
</div>


        </div>
      </div>
      {/* Mobile version */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="xl:hidden">
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-transparent -m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <MdClose aria-hidden />
              <span className="sr-only">Close menu</span>
            </button>
          </div>
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link href="/" className="block px-3 py-2" onClick={() => setMobileMenuOpen(false)}>
              Inicio
            </Link>
            <a
              className="block px-3 py-2"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuModelsOpen(true);
              }}
            >
              Modelos
            </a>
            {items &&
              items?.map((item, index: number) => (
                <Link
                  key={index}
                  href={`/${item.url?.internalLink?.current ?? item.url?.externalUrl ?? ''}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2"
                >
                  {item.label}
                </Link>
              ))}
          </div>
          <div className="mt-4 flex flex-col gap-2 px-2">
  <button
    onClick={() => {
      router.push('/contacto');
      setMobileMenuOpen(false);
    }}
    className="w-full bg-white text-red border border-red rounded-3xl px-4 py-2 text-center"
  >
    Contáctanos
  </button>
  <button
    onClick={() => {
      router.push('/test-drive');
      setMobileMenuOpen(false);
    }}
    className="w-full bg-red text-white border border-red rounded-3xl px-4 py-2 text-center"
  >
    Solicitar Test Drive
  </button>
</div>

        </DialogPanel>

        {mobileMenuModelsOpen && (
          <Dialog open={mobileMenuModelsOpen} onClose={setMobileMenuModelsOpen} className="xl:hidden">
            <div className="fixed z-20 inset-y-0 right-0 w-screen overflow-y-auto overscroll-y-contain scrolling-touch">
              <div className="flex min-h-full items-center justify-end">
                <DialogPanel className="w-full bg-neutral sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                  <div className="bg-transparent flex pt-6 sm:pt-4 pr-6 items-center justify-end fixed right-0 top-[1%] sm:top-0">
                    <button
                      type="button"
                      onClick={() => setMobileMenuModelsOpen(false)}
                      className="bg-transparent -m-2.5 rounded-md p-2.5 text-gray-700"
                    >
                      <MdClose aria-hidden />
                      <span className="sr-only">Close menu</span>
                    </button>
                  </div>

                  
                  <MenuModelsPage
                    data={modelsData}
                    closeNavbar={() => {
                      setMobileMenuOpen(false);
                    }}
                  />
                </DialogPanel>
              </div>
            </div>
          </Dialog>
        )}
      </Dialog>
    </nav>
  );
};

export default Navigation;
