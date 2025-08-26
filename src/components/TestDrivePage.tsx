'use client';
import Image from 'next/image';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { urlForImage } from '@/sanity/lib/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { TestDriveProps } from '@/types';
import { FaWhatsapp } from 'react-icons/fa'

import CustomSelect from './CustomSelect';
import { sendMail } from '@/helpers/sendEmail';

const TestDrivePage: React.FC<{ data: TestDriveProps | null }> = ({ data }) => {
  const { carDescription, carImg, title, dealers,ModelosAutos } = data ?? {};


  const validationSchema = Yup.object().shape({
    marca: Yup.string().required('Marca es requerido'),
    modelo: Yup.string().required('Modelo es requerido'),
    nombre: Yup.string().required('Nombre es requerido'),
    email: Yup.string().required('Email es requerido'),
    apellido: Yup.string().required('Apellido es requerido'),
    telefono: Yup.string().required('Telefono es requerido'),
    sucursal: Yup.string().required('Sucursal es requerido'),
    mensajeOpcional: Yup.string().optional(),
  });

  const initialValues = {
    marca: '',
    modelo: '',
    nombre: '',
    email: '',
    apellido: '',
    telefono: '',
    sucursal: '',
    mensajeOpcional: '',
  };

  const carImgSrc = carImg ? urlForImage(carImg) : '';
  const sucursalOptions = dealers ? dealers.map((dealer) => dealer.title) : [];

  // const ModelOption  = ModelosAutos ? ModelosAutos.map((ModeloAuto)=> ModeloAuto.valueOf):[];
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div>
          <h1 className="ml-4 mb-6 md:ml-8 lg:ml-14">{title}</h1>
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              sendMail('Nueva solicitud de Test Drive', values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-8 md:space-y-4 md:ml-4 lg:ml-10">
                <div>
                  <div className="mb-4 font-bold subtitle-2">¿Qué auto te interesa?</div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="input-like-text">
                      <Field
                        as="select"
                        name="marca"
                        className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                        disabled // ← lo deja solo lectura
                      >
                        <option value="Toyota">Toyota</option>
                      </Field>
                     
                      <ErrorMessage name="marca" />
                    </div>
                    <div className="input-like-text">
                        <Field
                          as="select"
                          name="modelo"
                          className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                        >
                          <option value="">Seleccioná un modelo</option>
                          {ModelosAutos?.map((modelo, index) => (
                            <option key={index} value={modelo}>
                              {modelo}
                            </option>
                          ))}
                        </Field>
                        <ErrorMessage name="modelo" component="div" className="text-red-600 text-sm" />
                      </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4 font-bold subtitle-2">¿Cómo te contactamos?</div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="input-like-text">
                      <Field
                        name="nombre"
                        placeholder="Nombre"
                        className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                        error={touched.nombre && !!errors.nombre}
                      />
                      <ErrorMessage name="nombre" />
                    </div>
                    <div className="input-like-text">
                      <Field
                        name="apellido"
                        placeholder="Apellido"
                        className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                        error={touched.apellido && !!errors.apellido}
                      />
                      <ErrorMessage name="apellido" />
                    </div>
                    <div className="input-like-text">
                      <Field
                        name="telefono"
                        placeholder="Teléfono"
                        type="number"
                        className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                        error={touched.telefono && !!errors.telefono}
                      />
                      <ErrorMessage name="telefono" />
                    </div>
                    <div className="input-like-text">
                      <Field
                        name="email"
                        placeholder="Email"
                        type="email"
                        className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                        error={touched.email && !!errors.email}
                      />
                      <ErrorMessage name="email" />
                    </div>
                    <div className="input-like-text bg-white">
                      <CustomSelect name="sucursal" options={sucursalOptions} />
                      <ErrorMessage name="sucursal" />
                    </div>
                  </div>
                </div>
                <div className="mt-12 mb-4">
                  <div className="input-like-text">
                    <Field
                      as="textarea"
                      name="mensajeOpcional"
                      placeholder="Mensaje opcional"
                      rows={2}
                      className="block w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                      error={touched.mensajeOpcional && !!errors.mensajeOpcional}
                    />
                    <ErrorMessage name="mensajeOpcional" />
                  </div>
                </div>
                <div className="pt-4 sm:pt-0">
                  {/* <div>
                    <a href="/terminos-legales" className="subtitle-2 font-bold">
                      Términos y condiciones
                    </a>
                  </div> */}
                  <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-4">
                    <button type="submit" className="py-2 px-6 rounded-full bg-red text-white hover:bg-red/90 transition">
                      Enviar solicitud
                    </button>
                    <a
                      href="https://wa.link/ttfsbm" // Reemplazá por tu link de WhatsApp
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 py-2 px-5 rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition"
                    >
                      <FaWhatsapp className="text-xl" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        <div className="w-full p-4 mt-4 sm:mt-0 md:w-1/2">
          {carImgSrc && (
            <Image
              src={carImgSrc}
              alt={'Car Image'}
              className="mx-auto"
              width={getImageDimensions(carImgSrc).width}
              height={getImageDimensions(carImgSrc).height}
              loading="lazy"
            />
          )}
          {/* <div className="text-center mt-4">
            <h3 className="mb-4">{carDescription || ''}</h3>
            <a className="block w-full text-right text-black underline">Más info &gt;</a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default TestDrivePage;
