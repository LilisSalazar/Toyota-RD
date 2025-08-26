'use client';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { ContactPageProps } from '@/types';

import CustomSelect from './CustomSelect';
import { sendMail } from '@/helpers/sendEmail';
import { FaWhatsapp } from 'react-icons/fa6';

const ContactPage: React.FC<{ data: ContactPageProps | null }> = ({ data }) => {
  const { title, dealers } = data ?? {};

  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('Nombre es requerido'),
    apellido: Yup.string().required('Apellido es requerido'),
    telefono: Yup.string().required('Telefono es requerido'),
    email: Yup.string().email().required('Email es requerido'),
    sucursal: Yup.string().required('Sucursal es requerido'),
    mensaje: Yup.string().required('Mensaje es requerido'),
  });

  const initialValues = {
    nombre: '',
    apellido: '',
    telefono: '',
    email: '',
    sucursal: '',
    mensaje: '',
  };

  const sucursalOptions = dealers ? dealers.map((dealer) => dealer.title) : [];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/2 lg:w-3/5">
          <h1 className="ml-4 mb-6 md:ml-8 lg:ml-14">{title}</h1>
        </div>
        <div className="w-full md:w-1/2 lg:w-3/5 p-4">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              sendMail('Nuevo contacto', values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form className="space-y-8 md:space-y-4 md:ml-4 lg:ml-10">
                <div>
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
                      name="mensaje"
                      placeholder="Mensaje opcional"
                      rows={2}
                      className="block w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                      error={touched.mensaje && !!errors.mensaje}
                    />
                    <ErrorMessage name="mensaje" />
                  </div>
                </div>
                <div className="pt-4 sm:pt-0">
                  {/* <div className="flex justify-start mt-8 sm:mt-4"> */}
                  <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-4">
                    <button type="submit" className="py-2 px-6 rounded-full hover:bg-gray-800 transition">
                      Enviar solicitud
                    </button>
                    <a
                      href=" https://wa.link/g64j1a" // Reemplazá por tu link de WhatsApp
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
      </div>
    </section>
  );
};

export default ContactPage;
