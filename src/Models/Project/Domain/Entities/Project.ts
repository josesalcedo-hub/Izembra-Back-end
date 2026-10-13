import { ProjectProps } from "../types/ProjectProps";

export class Project {
  public readonly id: string;
  public nombre: string;
  public descripcion: string;
  public constructora: string;
  public ubicacion: string;
  public estado: string;
  public plazoEntrega: string;
  public valorSeparacion: number;
  public porcentajeFinaciacion: number;
  public rentabilidadAnual: number | null;
  public tipoInmueble?: string | null;
  public precioMinimo?: number | null;
  public rentaCorta: boolean;

  constructor(props: ProjectProps) {
    this.id = props.id;
    this.nombre = props.nombre;
    this.descripcion = props.descripcion;
    this.constructora = props.constructora;
    this.ubicacion = props.ubicacion;
    this.estado = props.estado;
    this.plazoEntrega = props.plazoEntrega;
    this.valorSeparacion = props.valorSeparacion;
    this.porcentajeFinaciacion = props.porcentajeFinanciacion;
    this.rentabilidadAnual = props.rentabilidadAnual;
    this.tipoInmueble = props.tipoInmueble;
    this.precioMinimo = props.precioMinimo;
    this.rentaCorta = props.rentaCorta;
  }

  static reconstitute(props: ProjectProps): Project {
    return new Project(props);
  }
}
