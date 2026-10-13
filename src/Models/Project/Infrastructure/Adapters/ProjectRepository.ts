import { prismaClient } from "@/Infrastructure/repository/db";
import { Project } from "../../Domain/Entities/Project";
import { IProjectRepository } from "../../Domain/Ports/IProjectRepository";

export class ProjectRepository implements IProjectRepository {
  async findAll(): Promise<Project[]> {
    const projects = await prismaClient.project.findMany();

    const projectRecord = projects.map((p) => {
      return Project.reconstitute({
        id: p.id,
        nombre: p.nombre,
        descripcion: p.descripcion,
        constructora: p.constructora,
        ubicacion: p.ubicacion,
        estado: p.estado,
        plazoEntrega: p.plazoEntrega,
        valorSeparacion: Number(p.valorSeparacion),
        porcentajeFinanciacion: Number(p.porcentajeFinanciacion),
        rentabilidadAnual:
          p.rentabilidadAnual === null ? null : Number(p.rentabilidadAnual),
        tipoInmueble: p.tipoInmueble === null ? null : p.tipoInmueble,
        precioMinimo: p.precioMinimo === null ? null : Number(p.precioMinimo),
        rentaCorta: p.rentaCorta,
      });
    });

    return projectRecord;
  }

  async findById(id: string): Promise<Project> {
    const projects = await prismaClient.project.findUnique({ where: { id } });
    if (projects === null) {
      throw new Error("Proyecto no disponible");
    }

    const projectRecord = Project.reconstitute({
      id: projects.id,
      nombre: projects.nombre,
      descripcion: projects.descripcion,
      constructora: projects.constructora,
      ubicacion: projects.ubicacion,
      estado: projects.estado,
      plazoEntrega: projects.plazoEntrega,
      valorSeparacion: Number(projects.valorSeparacion),
      porcentajeFinanciacion: Number(projects.porcentajeFinanciacion),
      rentabilidadAnual:
        projects.rentabilidadAnual === null
          ? null
          : Number(projects.rentabilidadAnual),
      tipoInmueble:
        projects.tipoInmueble === null ? null : projects.tipoInmueble,
      precioMinimo:
        projects.precioMinimo === null ? null : Number(projects.precioMinimo),
      rentaCorta: projects.rentaCorta,
    });

    return projectRecord;
  }
}
