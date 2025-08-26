import { PortableTextBlock } from '@portabletext/types';

export interface CalculatorPageProps {
  headerTitle: string;
  headerDescription: string;
  modelo: string;
  cuotas: string;
  interesAnual: string;
  pagoInicial: string;
  notas: PortableTextBlock;
}
