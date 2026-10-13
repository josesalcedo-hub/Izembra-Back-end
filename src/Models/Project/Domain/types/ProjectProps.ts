export interface ProjectProps {
  id: string;
  nombre: string;
  descripcion: string;
  constructora: string;
  ubicacion: string;
  estado: string;
  plazoEntrega: string;
  valorSeparacion: number;
  porcentajeFinanciacion: number;
  rentabilidadAnual: number | null;
  tipoInmueble?: string | null;
  precioMinimo?: number | null;
  rentaCorta: boolean;
}
