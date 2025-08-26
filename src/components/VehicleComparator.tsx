'use client';
import * as React from 'react';
import Image from 'next/image';
import * as Yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { urlForImage } from '@/sanity/lib/image';
import { getImageDimensions } from '@sanity/asset-utils';
import { Flowbite, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { VehicleComparatorProps, VehicleForComparator } from '@/types';
import CustomSelect from './CustomSelect';

const keyTitleMap = {
  rims: 'Aros',
  bluetooth: 'Bluetooth',
  airBags: 'Bolsas de aire',
  inside: 'Interior',
  key: 'Llave',
  motor: 'Motor',
  tires: 'Neumáticos',
  passengers: 'Pasajeros',
  audioSystem: 'Sistema de audio',
};

const attributesToCompare = [
  'rims',
  'bluetooth',
  'airBags',
  'inside',
  'key',
  'motor',
  'tires',
  'passengers',
  'audioSystem',
];

const VehicleComparator: React.FC<{ data: VehicleComparatorProps | null; vehicleData: VehicleForComparator[] }> = ({
  data,
  vehicleData,
}) => {
  const { heroBanner, title, modelLeft, modelRight, detailTitle } = data ?? {};
  const heroImageSrc = heroBanner ? urlForImage(heroBanner) : '';

  interface CarComparisonTableProps {
    leftCarIndex: number;
    rightCarIndex: number;
  }

  const validationSchema = Yup.object().shape({
    leftCar: Yup.string().required('Primer auto es requerido'),
    rightCar: Yup.string().required('Segundo auto es requerido'),
  });

  const initialValues = {
    leftCar: '',
    rightCar: '',
  };

  const [showTable, setShowTable] = React.useState<boolean>(false);
  const [leftCarIndex, setLeftCarIndex] = React.useState<number | undefined>(undefined);
  const [rightCarIndex, setRightCarIndex] = React.useState<number | undefined>(undefined);
  const [error, setError] = React.useState({ leftCarError: '', rightCarError: '' });
  const [disabledComparatorButton, setDisabledComparatorButton] = React.useState(false);

  const handleLeftCarSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedCarIndex = carData?.findIndex((car) => car.title === event.target.value);
    setLeftCarIndex(selectedCarIndex);
  };

  const handleRightCarSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedCarIndex = carData?.findIndex((car) => car.title === event.target.value);
    setRightCarIndex(selectedCarIndex);
  };

  const handleComparatorButton = () => {
    setDisabledComparatorButton(true);
    let hasError = false;

    if (leftCarIndex == undefined) {
      setError((prevState) => ({ ...prevState, leftCarError: 'Seleccione un auto' }));
      hasError = true;
    } else {
      setError((prevState) => ({ ...prevState, leftCarError: '' }));
    }

    if (rightCarIndex == undefined) {
      setError((prevState) => ({ ...prevState, rightCarError: 'Seleccione un auto' }));
      hasError = true;
    } else {
      setError((prevState) => ({ ...prevState, rightCarError: '' }));
    }

    if (!hasError) {
      setShowTable(true);
    } else {
      setShowTable(false);
    }
  };

  const carData = vehicleData.filter((vehicle) => vehicle.technicalDetailsSection) ?? [];

  const CarComparisonTable: React.FC<CarComparisonTableProps> = ({ leftCarIndex, rightCarIndex }) => {
    const customTheme: CustomFlowbiteTheme = {
      table: {
        root: {
          base: 'w-full text-left text-sm text-gray-500 dark:text-gray-400',
          shadow: 'hidden',
          wrapper: 'relative',
        },
        body: {
          base: 'group/body',
          cell: {
            base: 'px-4 py-4',
          },
        },
        head: {
          base: ' ImgComparador group/head text-xs uppercase text-gray-700 dark:text-gray-400  display: table-caption',
          cell: {
            base: 'px-4 py-3',
          },
        },
        row: {
          base: 'group/row',
        },
      },
    };

    if (leftCarIndex === null || rightCarIndex === null || leftCarIndex === -1 || rightCarIndex === -1) {
      return <div>Selecciona ambos autos para comparar</div>;
    }

    const leftCar = carData[leftCarIndex];
    const rightCar = carData[rightCarIndex];
    const carsToCompare = [leftCar, rightCar];

    return (
      <div>
        <div className="flex justify-center items-center">
          <h1 className="mb-8 2xl:mb-12">{detailTitle}</h1>
        </div>
        <Flowbite theme={{ theme: customTheme }}>
          <Table aria-label="car comparison table">
          <TableHead>
            
             <TableHeadCell></TableHeadCell>
              {carsToCompare.map((car, idx) => {
                const carImageUrl = urlForImage(car.image);
                return (
                      <TableHeadCell key={idx} align="center">
                        <div className="flex justify-center items-center w-90 h-[auto]"> 
                          {carImageUrl && (
                            <Image
                              src={carImageUrl}
                              alt="Image Table"
                              width={400} // Tamaño fijo para que ambas imágenes ocupen el mismo espacio
                              height={300} // Ajustás la altura que quieras
                              className="object-contain"
                            />
                          )}
                        </div>
                      </TableHeadCell>
                    );
              })}
            
          </TableHead>

            <TableBody>
              <TableCell className="bg-neutral text-black">
                <p className="font-[Verdana-bold]">Categorías</p>
              </TableCell>
              {carsToCompare.map((car, idx) => (
                <TableCell key={idx} className="bg-neutral text-black" align="center">
                  <p className="font-[Verdana-bold]">{car?.title || '-'}</p>
                </TableCell>
              ))}
              {attributesToCompare.map((spec) => (
                <TableRow key={spec} className="bg-white odd:bg-[#F2F4F8]">
                  <TableCell scope="row">
                    <p className="text-[#737373]">{keyTitleMap[spec as keyof typeof keyTitleMap] || '-'}</p>
                  </TableCell>
                  {carsToCompare?.map((car, idx) => (
                    <TableCell key={idx} align="center">
                      <p className="text-[#737373]">
                        {car?.technicalDetailsSection[spec as keyof typeof car.technicalDetailsSection] || '-'}
                      </p>
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Flowbite>
      </div>
    );
  };

  const styles = StyleSheet.create({
    page: {
      padding: 20,
    },
    section: {
      marginBottom: 10,
    },
    title: {
      fontSize: 18,
    },
    table: {
      display: 'flex',
      width: 'auto',
      borderStyle: 'solid',
      borderWidth: 1,
      borderRightWidth: 0,
      borderBottomWidth: 0,
    },
    tableRow: {
      flexDirection: 'row',
    },
    tableCol: {
      width: '50%',
      borderStyle: 'solid',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderTopWidth: 0,
    },
    tableCell: {
      margin: 'auto',
      fontSize: 12,
      justifyContent: 'center',
      padding: 6,
    },
  });

  const CarComparisonPdf = ({ leftCar, rightCar }: { leftCar: any; rightCar: any }) => (
    <Document>
      <Page style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.title}>Comparación de Autos</Text>
        </View>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>Categorías</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{leftCar.title}</Text>
            </View>
            <View style={styles.tableCol}>
              <Text style={styles.tableCell}>{rightCar.title}</Text>
            </View>
          </View>

          {attributesToCompare.map((spec) => (
            <View style={styles.tableRow} key={spec}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{keyTitleMap[spec as keyof typeof keyTitleMap] || '-'}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{leftCar.technicalDetailsSection[spec]}</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>{rightCar.technicalDetailsSection[spec]}</Text>
              </View>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );

  const selectCarToCompare = carData.map((vehicle) => vehicle.title);

  return (
    <>
      <section
        className="w-full py-12 px-4 xl:pl-32 xl:py-44 overflow-hidden bg-cover"
        style={{ backgroundImage: `url(${heroImageSrc})` }}
      >
        <div className="flex flex-col justify-center items-center xl:items-start">
          <h1 className="text-white mr-2 md:mr-4 lg:mr-52 lg:mb-8">{title}</h1>
          <div className="rounded-md shadow-lg w-full max-w-4xl xl:max-w-full">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={() => {}}>
              {({ errors, touched }) => (
                <Form className="w-full lg:w-1/2">
                  <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <div className="w-full">
                      <p className="subtitle-1 font-sans min-[1920px]:text-[24px] mb-4 text-white">
                        ¿Qué auto te interesa?
                      </p>
                      <CustomSelect
                        name="leftCar"
                        options={selectCarToCompare}
                        forComparator={true}
                        onChange={handleLeftCarSelect}
                      />
                      <ErrorMessage name="leftCar" />
                    </div>

                    <div className="w-full">
                      <p className="subtitle-1 font-sans min-[1920px]:text-[24px] mb-4 text-white">
                        ¿Qué auto te interesa?
                      </p>
                      <CustomSelect
                        name="rightCar"
                        options={selectCarToCompare}
                        forComparator={true}
                        onChange={handleRightCarSelect}
                      />
                      <ErrorMessage name="rightCar" />
                    </div>
                  </div>

                  <div className="flex justify-start md:justify-center md:items-center md:mt-4 lg:justify-start">
                    <button
                      type="button"
                      className="font-[Verdana-bold] py-2 px-6 disabled:bg-gray disabled:cursor-not-allowed rounded-full mt-4 xs:mt-6 md:mr-6 2xl:mt-10"
                      onClick={() => handleComparatorButton()}
                      disabled={disabledComparatorButton}
                    >
                      Comparar
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>

      {showTable && (
        <section className="bg-white">
          <div className="mx-0 2xl:mx-44 mt-12">
            <CarComparisonTable leftCarIndex={leftCarIndex || 0} rightCarIndex={rightCarIndex || 0} />
          </div>
          <div className="flex flex-col justify-center items-center my-10 md:flex-row md:mr-8 lg:flex-row 2xl:mb-20 2xl:mt-12">
            <button
              type="submit"
              className="text-center font-[Verdana-bold] py-2 px-4 rounded-full mt-4 md:mr-4 lg:mr-4 xl:px-5 xl:py-3 2xl:px-8 2xl:mr-6"
              onClick={() => {
                setShowTable(false), setDisabledComparatorButton(false);
              }}
            >
              Hacer una nueva simulacion
            </button>
            {
              <PDFDownloadLink
                document={
                  <CarComparisonPdf leftCar={carData[leftCarIndex || 0]} rightCar={carData[rightCarIndex || 0]} />
                }
                fileName="car-comparison.pdf"
                className="text-red font-[Verdana-bold] py-2 px-4 border border-red rounded-full mt-4 md:ml-4 lg:ml-4 2xl:ml-6 justify-center items-center text-center"
                style={{ backgroundColor: 'white' }}
              >
                <p className="xl:px-3 xl:py-1 2xl:px-8">Descargar tabla</p>
              </PDFDownloadLink>
            }
          </div>
        </section>
      )}
    </>
  );
};

export default VehicleComparator;
