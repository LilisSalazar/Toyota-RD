'use client';

import Image from 'next/image';
import { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { DealersPageProps, Dealer } from '@/types';

interface DealersProps {
  key: number;
  title: string;
  address: string;
  phone: string;
  openingHoursLV: string;
  openingHoursS: string;
}

interface SearchBoxProps {
  dealers: Dealer[];
  setMapCenter: Function;
}

function DealerItem({ key, title, address, phone, openingHoursLV, openingHoursS }: DealersProps) {
  return (
    <div key={key} className="grid grid-flow-row h-auto pt-6 pb-8 px-8 mt-5 bg-neutral rounded-md">
      <h3 className="text-3xl mb-6">{title}</h3>
      <p className="text-sm">
        <span className="font-[Verdana-bold]">Dirección:</span> {address}
      </p>
      <p className="text-sm">
        <span className="font-[Verdana-bold]">Teléfono:</span> {phone}
      </p>
      {(openingHoursLV || openingHoursS) && (
        <p className="text-sm">
          <span className="font-[Verdana-bold]">Horario:</span>{' '}
          {openingHoursLV && (
            <>
              <span className="font-[Verdana-bold]">Lun-Vie:</span> {openingHoursLV}{' '}
            </>
          )}
          {openingHoursS && (
            <>
              <span className="font-[Verdana-bold]">Sab:</span> {openingHoursS}
            </>
          )}
        </p>
      )}
    </div>
  );
}


function SearchBox({ dealers, setMapCenter }: SearchBoxProps) {
  const [query, setQuery] = useState('');
  const [selectedDealer, setSelectedDealer] = useState<Dealer | null>(null);

  const filteredDealers =
  query === ''
    ? dealers.sort((a, b) => a.title.localeCompare(b.title)) // Ordenar alfabéticamente
    : dealers
        .filter((dealer) => dealer.title.toLowerCase().includes(query.toLowerCase()))
        .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Combobox
      as="div"
      value={selectedDealer}
      onChange={(dealer: Dealer | null) => {
        setQuery('');
        setSelectedDealer(dealer);
        setMapCenter(dealer?.location);
      }}
    >
      <div className="relative mt-2 h-14 w-96 xxs:w-[250px] xss:w-[280px] xs:w-[330px] sm:w-[280px] lg:w-[350px] xl:w-[380px]">
        <ComboboxInput
          className="w-full h-14 rounded-md border-0 bg-neutral py-1.5 pl-3 pr-10 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 xl:text-xl 2xl:text-2xl"
          onChange={(event) => setQuery(event.target.value)}
          onBlur={() => setQuery('')}
          displayValue={(dealer: Dealer) => dealer?.title}
          placeholder="Buscar en el mapa"
        />
        <ComboboxButton className="bg-transparent absolute inset-y-0 right-0 flex items-center rounded-r-md px-4 focus:outline-none">
          <Image src="/search-icon.png" alt="search icon" width={23} height={23} />
        </ComboboxButton>

        {filteredDealers.length > 0 && (
          <ComboboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm xl:text-xl 2xl:text-2xl">
            {filteredDealers.map((dealer, index) => (
              <ComboboxOption
                key={index}
                value={dealer}
                className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-indigo-600 data-[focus]:text-white"
              >
                <span className="block truncate group-data-[selected]:font-semibold">{dealer.title}</span>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        )}
      </div>
    </Combobox>
  );
}

const DealersPage: React.FC<{ data: DealersPageProps | null }> = ({ data }) => {
  const { title, dealers } = data ?? {};
  const [mapCenter, setMapCenter] = useState({ lat: 18.4445214, lng: -69.9784288486209 });

  return (
    <div>
      <div className="grid grid-flow-row auto-rows-min items-center bg-neutral pb-8 lg:pb-0">
        <div className="pl-14 pr-12 pb-12 pt-10 space-y-4 2xl:pl-28 2xl:pr-[6.1rem] 2xl:space-y-8 2xl:pb-32 2xl:pt-28">
          <h1 className="leading-none">{title}</h1>
          <SearchBox dealers={dealers || []} setMapCenter={setMapCenter} />
          <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY || ''}
            libraries={['core', 'maps', 'places']}
          >
            <GoogleMap
              mapContainerClassName="w-full h-[600px] rounded-2xl drop-shadow-2xl"
              center={mapCenter}
              zoom={15}
            >
              {dealers?.map((dealer, index) => <Marker key={index} position={dealer.location} />)}
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
      <div className="mt-24">
        <h2 className="leading-none xxs:ml-4 xss:ml-6 sm:ml-11 ml-2 mb-3 xl:ml-32 2xl:ml-[8.7rem] text-red">
          Sucursales:
        </h2>
        <div className="grid grid-flow-row mx-4 xss:mx-6 sm:mx-12 gap-y-5 gap-x-4 md:gap-y-0 md:grid-flow-col xl:mx-32 2xl:mx-36 xl:gap-x-6 2xl:gap-x-8">
        {dealers &&
            dealers
              .filter((dealer) => dealer.isConcesionario)
              .sort((a, b) => a.title.localeCompare(b.title)) // Ordenar alfabéticamente
              .map((dealer, index) => (
                <DealerItem
                  key={index}
                  title={dealer.title}
                  address={dealer.address}
                  phone={dealer.phone}
                  openingHoursLV={dealer.openingHoursLV}
                  openingHoursS={dealer.openingHoursS}
                />
            ))}
        </div>
      </div>
      <div className="mt-5 mb-6 xl:mt-10 xl:mb-12 2xl:mb-24">
        <h2 className="leading-none xxs:ml-4 xss:ml-6 sm:ml-12 ml-2 mb-2 xl:ml-32 2xl:ml-[8.7rem]  text-red">
          Dealers:
        </h2>
        <div className="grid grid-flow-row mx-4 gap-y-5 gap-x-4 xss:mx-6 sm:mx-12 md:gap-y-0 md:grid-cols-2 xl:grid-cols-3 xl:mx-32 2xl:mx-36 xl:gap-x-6 2xl:gap-x-8">
        {dealers &&
            dealers
              .filter((dealer) => !dealer.isConcesionario)
              .sort((a, b) => a.title.localeCompare(b.title)) // Ordenar alfabéticamente
              .map((dealer, index) => (
                <DealerItem
                  key={index}
                  title={dealer.title}
                  address={dealer.address}
                  phone={dealer.phone}
                  openingHoursLV={dealer.openingHoursLV}
                  openingHoursS={dealer.openingHoursS}
                />
              ))}
        </div>
      </div>
    </div>
  );
};

export default DealersPage;
