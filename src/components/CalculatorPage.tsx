'use client';

import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { CalculatorPageProps } from '@/types';
import { PortableText } from '@portabletext/react';

interface FormValues {
  modelo: string;
  cuotas: string;
  interesAnual: string;
  pagoInicial: string;
}




interface PaymentDetail {
  numeroCuota: number;
  cuotaImporte: string;
  capital: string;
  interes: string;
  balance: string;
}
   
const CalculatorPage: React.FC<{ data: CalculatorPageProps | null }> = ({ data }) => {
  const { headerTitle, headerDescription, notas } = data ?? {};

  const [paymentDetails, setPaymentDetails] = useState<PaymentDetail[]>([]);
  const [enabledSectionDetail, setEnabledSectionDetailt] = useState<boolean>(false);

  const validationSchema = Yup.object().shape({
    modelo: Yup.string().required('Nombre es requerido'),
    cuotas: Yup.string().required('Cuotas es requerido'),
    interesAnual: Yup.string().required('Interes Anual es requerido'),
    pagoInicial: Yup.string().required('Pago Inicial es requerido'),
  });

  const initialValues: FormValues = {
    modelo: '',
    cuotas: '',
    interesAnual: '',
    pagoInicial: '',
  };

  const calculatePayments = (values: FormValues): PaymentDetail[] => {
    const { cuotas, interesAnual, pagoInicial } = values;
    const montoTotal = 100000;
    const montoPrestamo = montoTotal - parseFloat(pagoInicial);
    const tasaMensual = parseFloat(interesAnual) / 100 / 12;
    const numCuotas = parseInt(cuotas, 10);

    const cuotaImporte =
      (montoPrestamo * tasaMensual * Math.pow(1 + tasaMensual, numCuotas)) / (Math.pow(1 + tasaMensual, numCuotas) - 1);

    let balance = montoPrestamo;

    return Array.from({ length: numCuotas }, (_, i) => {
      const interes = balance * tasaMensual;
      const capital = cuotaImporte - interes;
      balance -= capital;

      return {
        numeroCuota: i + 1,
        cuotaImporte: cuotaImporte.toFixed(2),
        capital: capital.toFixed(2),
        interes: interes.toFixed(2),
        balance: balance.toFixed(2),
      };
    });
  };

  return (
    <div>
      <section style={{ backgroundColor: '#E8E8E8' }}>
        <div className="text-center p-8 pt-20 w-11/12">
          <h1 className="mb-8 md:ml-10 lg:ml-12 xl:ml-48 2xl:ml-[300px]">{headerTitle || ''}</h1>
          <div className="subtitle-1 ml-1 text-left md:ml-[130px] lg:ml-[150px] xl:ml-[303px] xl:mr-10 2xl:ml-[354px] 2xl:mt-16 2xl:mb-8">
            {headerDescription || ''}
          </div>

          <div className="lg:ml-[150px] xl:ml-[303px] 2xl:ml-[354px]">
            <div className="grid grid-flow-row space-x-0 lg:space-x-24 lg:grid-cols-2 lg:mb-8 md:mr-[60px]">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  const pagos = calculatePayments(values);
                  setPaymentDetails(pagos);
                  resetForm();
                }}
              >
                {({ errors, touched }) => (
                  <Form id="calculatorForm" className="w-full max-w-xs mx-auto mt-8 2xl:max-w-lg ">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="input-like-text">
                        <Field
                          name="modelo"
                          placeholder="Modelo"
                          className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                          error={touched.modelo && !!errors.modelo}
                        />
                      </div>
                      <ErrorMessage name="modelo" />
                      <div className="input-like-text">
                        <Field
                          name="cuotas"
                          type="number"
                          placeholder="Cuotas"
                          className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                          error={touched.cuotas && !!errors.cuotas}
                        />
                        <ErrorMessage name="cuotas" />
                      </div>
                      <div className="input-like-text mt-8">
                        <Field
                          name="interesAnual"
                          type="number"
                          placeholder="Interes Anual"
                          className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                          error={touched.interesAnual && !!errors.interesAnual}
                        />
                        <ErrorMessage name="interesAnual" />
                      </div>
                      <div className="input-like-text">
                        <Field
                          name="pagoInicial"
                          type="number"
                          placeholder="Pago Inicial"
                          className="w-full bg-[#F2F4F8] border-[#737373] rounded-none text-gray-700"
                          error={touched.pagoInicial && !!errors.pagoInicial}
                        />
                        <ErrorMessage name="pagoInicial" />
                      </div>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="rounded-full py-2 px-10 mt-6 mb-4 md:mr-52 lg:w-52 lg:mr-44 xl:-ml-1xl:mb-8 xl:mt-12 2xl:w-80 2xl:mt-16 2xl:-ml-1 2xl:mb-14"
                        onClick={() => setEnabledSectionDetailt(true)}
                      >
                        Calcular
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className="text-left pt-6 mb-4 xl:mr-16">
                <PortableText
                  value={notas || []}
                  components={{
                    block: {
                      normal: ({ children }) => <p>{children}</p>,
                    },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {paymentDetails.length > 0 && enabledSectionDetail == true && (
        <section>
          <div className="text-center p-8 pt-20">
            <h1 className="mb-8 lg:mr-2 xl:-ml-[4px] 2xl:mr-10 2xl:mb-12">Detalle de pagos</h1>
            <div className="overflow-x-auto">
              {paymentDetails.map((detalle, index) => (
                <div key={index} className="mb-8">
                  <table className="min-w-[80%] md:min-w-[90%] table-auto text-left border-collapse mt-4 rounded-2xl overflow-hidden shadow-lg md:ml-[41px] lg:ml-[52px] xl:ml-[70px] 2xl:ml-24">
                    <thead className="bg-gray-200">
                      <tr className="bg-gray-200">
                        <th className="pl-6 py-4 text-center font-medium 2xl:py-10">No.</th>
                        <th className="pl-6 py-4 text-center font-medium 2xl:py-10">Cuota</th>
                        <th className="pl-6 py-4 text-center font-medium 2xl:py-10">Capital</th>
                        <th className="pl-6 py-4 text-center font-medium 2xl:py-10">Interés</th>
                        <th className="pl-6 py-4 pr-4 text-center font-medium 2xl:py-10">Balance</th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                      <tr className="bg-gray-200">
                        <td className="py-6 text-center pl-4 font-bold 2xl:py-10">{detalle.numeroCuota}</td>
                        <td className="py-6 text-center pl-4 font-bold 2xl:py-10">${detalle.cuotaImporte}</td>
                        <td className="py-6 text-center pl-4 font-bold md:mr-8 2xl:py-10">${detalle.capital}</td>
                        <td className="py-6 text-center pl-4 font-bold md:mr-8 2xl:py-10">${detalle.interes}</td>
                        <td className="py-6 text-center pl-4 font-bold md:mr-8 2xl:py-10">${detalle.balance}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mb-20 mt-6">
            <p className="font-medium mx-3 lg:mx-8 2xl:mb-12">
              Los costos mostrados anteriormente son una estimación y están sujetos a cambios sin previo aviso.
            </p>
          </div>
        </section>
      )}
    </div>
  );
};

export default CalculatorPage;
