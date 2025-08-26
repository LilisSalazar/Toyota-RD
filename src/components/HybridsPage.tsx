import { urlForImage } from '@/sanity/lib/image';
import { HybridsPageProps } from '@/types/HybridsPage';
import Image from 'next/image';
import NewsSection from './NewsSection';

const HybridsPage: React.FC<{ data: HybridsPageProps }> = ({ data }) => {
  const { benefits, heroSection, savingSection, whatSection, newsSection } = data;
  console.log('newsSection en HybridsPage:', newsSection);
  console.log('newsSection.title:', newsSection?.title);
  console.log('newsSection.news:', newsSection?.news);

  return (
    <main className="flex flex-col gap-8 md:gap-16">
      <article
        className="h-[40rem] bg-cover bg-center flex flex-col justify-between items-center px-4 py-8 lg:px-8 lg:py-16 2xl:px-12"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.8) 100%), url(${urlForImage(heroSection.backgroundImage)})`,
        }}
      >
        <section className="hidden lg:flex" />
        <h3 className="font-sans text-center text-white lg:order-2">{heroSection.subtitle} </h3>
        <section className="flex flex-col justify-center items-center gap-4 w-full lg:flex-row lg:justify-between lg:pt-16">
          <div className="w-[138px] h-[37px] p-1 lg:h-[92px] lg:w-[250px] xl:h-[129px] xl:w-[350px] 2xl:h-[182px] 2xl:w-[492px] 2xl:p-8">
            <Image src={urlForImage(heroSection.icon) ?? ''} alt="Hero image" width={492} height={182} />
          </div>
          <h3 className="text-white text-center">{heroSection.title}</h3>
        </section>
      </article>

      <article className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 lg:px-16 xl:gap-16 xl:px-32 2xl:px-36">
        <section
          className="bg-cover bg-center h-[15rem] md:h-auto 2xl:h-[455px] w-full md:order-2"
          style={{
            backgroundImage: `url(${urlForImage(whatSection.image)})`,
          }}
        />
        <section className="flex flex-col flex-1 justify-center gap-2">
          <h1 className="leading-[1.1]">{whatSection.title}</h1>
          <div className="flex flex-col gap-2 xl:gap-4">
            {whatSection.content.map((content, index) => (
              <p className="home-subtitle" key={index}>
                {content}
              </p>
            ))}
          </div>
        </section>
      </article>

      <article className="flex flex-col gap-8 px-4 lg:px-16 xl:gap-16 xl:px-32 2xl:mt-24">
        <h2 className="font-bold md:text-center">Beneficios del Sistema Híbrido Eléctrico</h2>
        <ul className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
          {benefits.map(({ description, icon, title }) => (
            <li className="flex gap-4 items-center md:flex-col" key={title}>
              <Image
                alt={`${title} icon`}
                className="mb-1 h-[68px] w-[78px]"
                height={68}
                src={urlForImage(icon) ?? ''}
                width={78}
              />
              <div className="flex flex-col gap-0.5">
                <h4 className="font-[Verdana-bold] text-sky-400 md:text-center">{title}</h4>
                <p className="md:text-center">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </article>

      <article
        className="flex flex-row flex-wrap gap-2 -mb-8 p-8 h-[30rem] bg-cover bg-left xl:bg-center items-center justify-center 2xl:justify-end"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(15, 23, 42, 0) 0%, rgba(15, 23, 42, 0.8) 100%), url(${urlForImage(savingSection.backgroundImage)})`,
        }}
      >
        <h3 className="w-auto font-[Verdana-bold] text-white text-center 2xl:w-[690px]">
          Nuestra tecnología híbrida te permite ahorrar hasta un{' '}
          <span className="text-[#00D8FF] text-xl 2xl:text-5xl">40%</span> de combustible.
        </h3>
      </article>
      {newsSection && <NewsSection data={{ title: newsSection.title, news: newsSection.news }} />}
      {/* {newsSection && <NewsSection data={{ title: newsSection.title || '', news: newsSection.news || [] }} />} */}
      {/* <NewsSection data={{ title: newsSectionTitle || '', news: news || [] }} /> */}
    </main>
  );
};
export default HybridsPage;
