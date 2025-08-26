import Image from 'next/image';
import Link from 'next/link';
import { getImageDimensions } from '@sanity/asset-utils';
import { urlForImage } from '@/sanity/lib/image';
import { FooterProps } from '@/types';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer: React.FC<{ data: FooterProps | null }> = ({ data }) => {
  const { mission, logo, col1Title, col1Links, col2Title, col2Links } = data ?? {};
  const logoSrc = logo ? urlForImage(logo) : '';
  return (
    <footer aria-labelledby="footer-heading" className="bg-black px-4 pt-8 md:px-12 lg:pt-16 xl:px-12 2xl:px-24">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-full border-t border-white pb-8 pt-8 lg:pt-16 2xl:pb-16">
        <div className="xl:grid xl:grid-flow-col mx-4 md:mx-0 xl:gap-12 2xl:gap-24 2xl:mx-16">
          <div className="">
            {logoSrc && (
              <Image
                src={logoSrc}
                alt="logo delta comercial"
                width={getImageDimensions(logoSrc).width}
                height={getImageDimensions(logoSrc).height}
                className="w-[296px] ml-[-25px] mt-[-35px] sm:ml-[-35px] md:ml-[-25px] xl:mt-[-50px]"
              />
            )}
            <p className="text-white w-auto xs:w-[375px] ml-0 sm:ml-[-15px] md:ml-0">{mission}</p>
                <div className="mt-6 flex space-x-4">
                      <a href="https://www.facebook.com/DeltaComercial/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FaFacebookF size={20} />
                      </a>
                      <a href="https://www.instagram.com/deltacomercial/?hl=es-la" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FaInstagram size={20} />
                      </a>
                      <a href="https://www.youtube.com/channel/UCVZmorGxY7cAHIjhFX1nzxQ" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <FaYoutube size={20} />
                      </a>
                      
              </div>
          </div>
          <div className="mt-8 grid grid-flow-row lg:grid-flow-col xl:gap-12 2xl:gap-24 xl:mt-0">
            <div>
              <h3 className="leading-6 text-white">{col1Title}</h3>
              <ul role="list" className="mt-6 space-y-4">
                {col1Links &&
                  col1Links.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${item.url?.internalLink?.current ?? item.url?.externalUrl ?? ''}`}
                        className="leading-6 text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="mt-10 lg:mt-0">
              <h3 className="text-nowrap leading-6 text-white md:text-wrap">{col2Title}</h3>
              <ul role="list" className="mt-6 space-y-4">
                {col2Links &&
                  col2Links.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={`/${item.url?.internalLink?.current ?? item.url?.externalUrl ?? ''}`}
                        className="leading-6 text-white"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white pt-8 sm:mt-20 xl:mt-12 2xl:mt-24 2xl:pt-16">
          <p className="text-center leading-5 text-white">{data?.copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
