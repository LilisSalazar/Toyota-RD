'use client';
import Image from 'next/image';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { RepairPageProps } from '@/types/RepairPage';
import { urlForImage } from '@/sanity/lib/image';
import { getImageDimensions } from '@sanity/asset-utils';
import CustomSelect from './CustomSelect';
import { sendMail } from '@/helpers/sendEmail';
import { CategoryVehicleProps } from '@/types';
import { FaWhatsapp } from 'react-icons/fa'

const RepairPage: React.FC<{ data: RepairPageProps | null; vehicleData: CategoryVehicleProps[] }> = ({
  data,
  vehicleData,
}) => {
  const { headerTitle, headerImg, sectionTitle, features, dealers } = data ?? {};

  const backgroundHeaderImg = headerImg ? urlForImage(headerImg) : '';
  const validationSchema = Yup.object().shape({
    nombre: Yup.string().required('Nombre es requerido'),
    segundoNombre: Yup.string().optional(),
    apellido: Yup.string().required('Apellido es requerido'),
    telefono: Yup.number().required('Teléfono es requerido'),
    email: Yup.string().required('Email es requerido'),
    modelo: Yup.string().required('Modelo es requerido'),
    year: Yup.number().required('Año es requerido'),
    chasis: Yup.string().required('Chasis es requerido'),
    sucursal: Yup.string().required('Sucursal es requerida'),
    marca: Yup.string().required('Marca es requerida'),
    mensaje: Yup.string().required('Mensaje es requerido'),
  });

  const initialValues = {
    nombre: '',
    segundoNombre: '',
    apellido: '',
    telefono: '',
    email: '',
    modelo: '',
    year: '',
    chasis: '',
    sucursal: '',
    marca: '',
    mensaje: '',
  };

  const pickMarcaOptionsBrand = vehicleData
    ?.map((item) => item?.vehicles?.map((vehicle) => vehicle?.brand))
    .flat()
    .filter((brand) => brand !== undefined)
    .filter((value, index, array) => array.indexOf(value) === index);

  const sucursalOptions = dealers ? dealers.map((dealer) => dealer.title) : [];

  return (
    <div>
      <section className="relative w-full h-[393px] overflow-hidden lg:h-[350px] 2xl:h-[500px] md:h-[250px]">
        <Image
          src={backgroundHeaderImg || ''}
          alt={'Header img'}
          fill
          className="object-cover"
          loading="lazy"
          priority={false}
        />
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <h1
          className="absolute inset-0 flex items-center text-white justify-center text-center text-xl sm:text-2xl md:text-4xl leading-tight ml-0 sm:ml-12 lg:max-w-[550px] max-w-[500px] xl:max-w-[650px] 2xl:max-w-[800px] xl:ml-20 2xl:ml-24"
          style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', margin:'auto' }}
        >
          {headerTitle}
        </h1>
      </section>

      <section className="flex flex-col justify-center mt-8 pt-12 py-8 px-8 space-y-8 md:px-16 xl:px-64">
        <h1 className="text-xl sm:text-2xl pt-12 md:text-4xl text-center mb-8">{sectionTitle}</h1>
        <div className="flex flex-col md:flex-row md:space-x-6 justify-center items-stretch ">
          {features?.map((item, index) => {
            const featureImg = item.featuresBackgroundImg ? urlForImage(item.featuresBackgroundImg) : '';
            return (
              <div
                key={index}
                className="flex flex-col justify-between h-full flex-1 mb-12 lg:mb-16 xl:mb-10 md:mb-24 2xl:mb-24 gap-y-4"
              >
                <div>
                  {featureImg && (
                   <Image
  src={featureImg}
  alt={item.featuresTitle}
  width={getImageDimensions(featureImg).width}
  height={getImageDimensions(featureImg).height}
  className="object-contain mx-auto w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:h-[83px]"
/>
                  )}
                </div>
                <div className="flex flex-row items-end justify-center">
                  <div className="subtitle-2 text-center">{item.featuresTitle}</div>
                </div>
                <p className="text-sm sm:text-base text-center">{item.featuresDescription}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-neutral py-2 flex justify-center items-center w-full">
        <div className="px-6 w-auto lg:w-full pb-6">
          <h1 className="mb-10 mt-12 ml-0 sm:ml-6 text-xl sm:text-2xl md:text-4xl">Cotiza tus repuestos</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              sendMail('Nueva solicitud de cotizacion de repuestos', values);
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form id="workshopForm" className="ml-0 sm:ml-6 2xl:w-3/4 xl:w-2/3 lg:w-4/5 xl:ml-12 2xl:ml-16">
                <div className="subtitle-2 text-sm sm:text-base mb-8">¿Cómo te contactamos?</div>
                <div className="grid grid-flow-row md:grid-cols-3 gap-4">
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
                </div>
                <div className="subtitle-2 mt-8 text-sm sm:text-base mb-8">¿Qué auto tienes?</div>
                <div className="grid grid-flow-row md:grid-cols-3 gap-4">
                <div className="input-like-text">
                      <Field
                        as="select"
                        name="marca"
                        className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                        // disabled // ← lo deja solo lectura
                      >
                        <option value="Toyota">Toyota</option>
                      </Field>
                      <ErrorMessage name="marca" />
                    </div>
                  <div className="input-like-text">
                    <Field
                      name="modelo"
                      placeholder="Modelo"
                      className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                      error={touched.modelo && !!errors.modelo}
                    />
                    <ErrorMessage name="modelo" />
                  </div>
                  <div className="input-like-text">
                    <Field
                      name="year"
                      placeholder="Año"
                      type="number"
                      className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                      error={touched.year && !!errors.year}
                    />
                    <ErrorMessage name="year" />
                  </div>
                  <div className="input-like-text">
                    <Field
                      name="chasis"
                      placeholder="Chasis"
                      className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                      error={touched.chasis && !!errors.chasis}
                    />
                    <ErrorMessage name="chasis" />
                  </div>
                  <div className="input-like-text">
                    <CustomSelect name="sucursal" options={sucursalOptions} />
                    <ErrorMessage name="sucursal" />
                  </div>
                </div>
                <div className="input-like-text mt-12">
                  <Field
                    as="textarea"
                    name="mensaje"
                    placeholder="Escriba su mensaje aquí"
                    rows={3}
                    className="block w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                    error={touched.mensaje && !!errors.mensaje}
                  />
                  <ErrorMessage name="mensaje" />
                </div>
                <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-4">
                                    <button
  type="submit"
  className="py-1.5 px-4 sm:py-2 sm:px-6 text-sm sm:text-base rounded-full bg-red text-white hover:bg-red/90 transition"
>
  Enviar solicitud
</button>
                                    <a
  href="https://wa.link/ttfsbm"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 py-1 px-4 sm:py-2 sm:px-5 text-sm sm:text-base rounded-full border-2 border-green-600 text-green-600 hover:bg-green-50 transition"
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
    </div>
  );
};

export default RepairPage;
