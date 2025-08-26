'use client';
import React from 'react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { WorkShopPageProps } from '@/types/WorkShopPage';
import { FaWhatsapp } from 'react-icons/fa'
import CustomSelect from './CustomSelect';
import { sendMail } from '@/helpers/sendEmail';

const WorkShopPage: React.FC<{ data: WorkShopPageProps | null }> = ({ data }) => {
  const {
    headerImage,
    heroTitle,
    heroSubtitle,
    subHeaderImg,
    subHeaderDescription,
    subHeaderTitle,
    footerDescription,
    footerImg,
    footerTitle,
    dealers,
  } = data ?? {};

  const backgroundHeaderImgSanity = headerImage ? urlForImage(headerImage) : '';
  const subHeaderImgSanity = subHeaderImg ? urlForImage(subHeaderImg) : '';
  const footerImgSanity = footerImg ? urlForImage(footerImg) : '';

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('Nombre es requerido'),
    telefono: Yup.number().required('Teléfono es requerido'),
    email: Yup.string().required('Email es requerido'),
    cantidadKm: Yup.number().required('Cantidad de KM es requerido'),
    chasis: Yup.string().required('Chasis es requerido'),
  });

  const initialValues = {
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    modelo: '',
    year: '',
    cantidadKm: '',
    chasis: '',
    sucursal: '',
  };

  const sucursalOptions = dealers ? dealers.map((dealer) => dealer.title) : [];

  return (
    <div>
      <section className="relative w-full overflow-hidden">
        {backgroundHeaderImgSanity && (
          <Image
            src={backgroundHeaderImgSanity}
            alt="Hero image"
            width={getImageDimensions(backgroundHeaderImgSanity).width}
            height={getImageDimensions(backgroundHeaderImgSanity).height}
            className="object-contain w-full h-auto"
            priority={true}
          />
        )}
        <div className="absolute inset-0 flex flex-col justify-center ml-3 sm:ml-4 md:ml-6 lg:ml-12 xl:ml-20 2xl:ml-48 max-w-[55%] xs:max-w-[55%] sm:max-w-[60%] md:max-w-[420px] lg:max-w-[550px] xl:max-w-[650px] 2xl:max-w-[800px]">
  <h1 className="text-white text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-snug text-left">
    {heroTitle}
  </h1>
  <div className="home-subtitle text-white text-xs sm:text-sm md:text-base lg:text-lg mt-2">
    {heroSubtitle}
  </div>
</div>
      </section>
        {/* }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}
    <section className="flex flex-col justify-center py-8 px-8 space-y-8 md:px-16 xl:px-64">
  <div className="pt-[90px] mx-auto w-[70%] flex flex-col md:flex-row md:space-x-6 justify-center items-stretch">

    {[
      {
        title: 'Chequeo general',
        description: 'Confía en los aceites para Transmisión y filtros originales de Toyota para proteger tu motor y mantenerlo funcionando en óptimas condiciones.',
        image: '/Aceite.svg',
      },
      {
        title: 'Diagnóstico especializado',
        description: 'No hay límites para un Toyota protegido por nuestros refrigerantes, ni ruta que no pueda recorrer si está limpio desde adentro.',
        image: '/AceiteBotella.svg',
      },
    ].map((item, index) => (
      <div
        key={index}
        className="flex flex-col justify-between h-full flex-1 mb-12 lg:mb-16 xl:mb-10 md:mb-24 2xl:mb-24 gap-y-4"
      >
        <div>
                <Image
          src={item.image}
          alt={item.title}
          width={100}
          height={100}
          className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] object-contain mx-auto"
        />
        </div>
        <div className="flex flex-row items-end justify-center">
          <div className="subtitle-2 text-center">{item.title}</div>
        </div>
        <p className="text-center sm:max-w-full max-w-[95%] mx-auto text-sm sm:text-base">{item.description}</p>
      </div>
    ))}
  </div>
</section>


{/* }}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}} */}
      <section className="py-4 px-4 mt-2 mb-4">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center xl:mt-3 lg:-ml-10">
    <div className="flex flex-col justify-start px-4 pt-0 lg:px-0 lg:pl-20 xl:pl-32 mb-4 lg:mb-4 2xl:pt-16 2xl:h-full">
      
      {/* Título más pequeño en móvil */}
      <h1 className="mb-2 ml-0 text-xl sm:text-2xl md:text-4xl">
        {subHeaderTitle || ''}
      </h1>
      
      {/* Descripción más pequeña en móvil */}
      <div className="subtitle-1 font-sans tracking-tight leading-7 ml-0 sm:mr-4 lg:pr-20 xl:pr-44 2xl:pr-60 text-sm sm:text-base md:text-lg">
        {subHeaderDescription}
      </div>

    </div>

    <div className="flex justify-center ml-4 mt-4 mr-4 lg:justify-end sm:pr-8 md:ml-4 md:mr-4 lg:pr-4 xl:mr-12 2xl:mr-16">
      {subHeaderImgSanity && (
        <Image
          src={subHeaderImgSanity}
          alt={subHeaderTitle || ''}
          loading="lazy"
          className="w-full h-auto md:w-full lg:w-full xl:w-full 2xl:w-full"
          width={getImageDimensions(subHeaderImgSanity).width}
          height={getImageDimensions(subHeaderImgSanity).height}
        />
      )}
    </div>
  </div>
</section>


      <section className="bg-neutral py-2 flex justify-center items-center w-full">
        <div className="px-6 py-6 w-auto lg:w-full">
          <h1 className="mb-20 mt-12 ml-6 2xl:ml-16 xl:ml-12 md:ml-6 text-xl sm:text-2xl md:text-4xl">Agenda tu servicio de mantenimiento</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              sendMail('Nueva solicitud de servicio de mantenimiento', values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form id="workshopForm" className="ml-6 lg:w-4/5 xl:w-2/3 2xl:w-[70%] xl:ml-12 2xl:ml-16">
                <div className="mt-8 mb-4 ml-4 subtitle-2">¿Cómo te contactamos?</div>
                <div className="grid grid-flow-row md:grid-cols-3 gap-4">
                  <div className="input-like-text">
                    <Field
                      name="nombre"
                      placeholder="Nombre"
                      className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700 h-auto 2xl:h-[60px]"
                      error={touched.nombre && !!errors.nombre}
                    />
                    <ErrorMessage name="nombre" />
                  </div>
                  <div className="input-like-text">
                    <Field
                      name="apellido"
                      placeholder="Apellido"
                      className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700 h-auto 2xl:h-[60px]"
                      error={touched.apellido && !!errors.apellido}
                    />
                    <ErrorMessage name="apellido" />
                  </div>
                  <div className="input-like-text">
                    <Field
                      name="telefono"
                      placeholder="Teléfono"
                      type="number"
                      className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700 h-auto 2xl:h-[60px]"
                      error={touched.telefono && !!errors.telefono}
                    />
                    <ErrorMessage name="telefono" />
                  </div>
                  <div className="input-like-text">
                    <Field
                      name="email"
                      placeholder="Email"
                      type="email"
                      className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700 h-auto 2xl:h-[60px]"
                      error={touched.email && !!errors.email}
                    />
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <div className="mt-8 mb-4 ml-4 subtitle-2">¿Qué auto tienes?</div>
                <div className="grid grid-flow-row md:grid-cols-3 gap-4">
                  <div className="input-like-text">
                    <Field
                      name="modelo"
                      placeholder="Modelo"
                      className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700 h-auto 2xl:h-[60px]"
                      error={touched.modelo && !!errors.modelo}
                    />
                    <ErrorMessage name="modelo" />
                  </div>
                  <div className="input-like-text">
                    <Field
                      name="year"
                      placeholder="Año"
                      type="number"
                      className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700 h-auto 2xl:h-[60px]"
                      error={touched.year && !!errors.year}
                    />
                    <ErrorMessage name="year" />
                  </div>
                  <div className="input-like-text">
                    <Field
                      name="cantidadKm"
                      placeholder="KM exacto del vehículo"
                      type="number"
                      className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700 h-auto 2xl:h-[60px]"
                      error={touched.cantidadKm && !!errors.cantidadKm}
                    />
                    <ErrorMessage name="cantidadKm" />
                  </div>
                  <div className="input-like-text">
                    <Field
                      name="chasis"
                      placeholder="Chasis, NIV o Placa"
                      className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700 h-auto 2xl:h-[60px]"
                      error={touched.chasis && !!errors.chasis}
                    />
                    <ErrorMessage name="chasis" />
                  </div>
                  <div className="input-like-text">
                    <CustomSelect
                      name="sucursal"
                      options={sucursalOptions}
                      placeholder="Sucursal"
                      inputClassName="h-auto 2xl:h-[60px]"
                    />
                    <ErrorMessage name="sucursal" />
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-4">
  <button
    type="submit"
    className="py-1.5 px-4 sm:py-2 sm:px-6 text-sm sm:text-base rounded-full bg-red text-white hover:bg-red/90 transition"
  >
    Enviar solicitud
  </button>
  <a
    href="https://wa.link/xt07j7"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 py-1.5 px-4 sm:py-2 sm:px-5 text-sm sm:text-base rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition"
  >
    <FaWhatsapp className="text-lg sm:text-xl" />
    WhatsApp
  </a>
</div>
              </Form>
            )}
          </Formik>
        </div>
      </section>

      <section className="py-4 px-4 mt-10 mb-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center mb-4 2xl:ml-12">
          <div className="flex justify-center ml-4 mr-2 md:mr-14">
            {footerImgSanity && (
              <Image
                src={footerImgSanity}
                alt={'Footer img'}
                width={getImageDimensions(footerImgSanity).width}
                height={getImageDimensions(footerImgSanity).height}
                loading="lazy"
                className="w-full h-auto md:w-full lg:w-full lg:ml-12 xl:w-full 2xl:w-full"
              />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="mb-2 ml-4  text-xl mt-6 sm:text-2xl md:text-4xl">
              {footerTitle || ''}
            </h1>
<div className="subtitle-1 font-sans tracking-tight leading-7 ml-4 lg:mr-10 xl:mr-40 max-w-lg text-sm sm:text-base md:text-lg">
  {footerDescription || ''}
</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkShopPage;
