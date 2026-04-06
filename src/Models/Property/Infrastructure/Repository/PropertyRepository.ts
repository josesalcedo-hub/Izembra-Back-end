import { prismaClient } from "@/Infrastructure/repository/db";
import { Property } from "../../Domain/Entities/Property";
import { IProperty } from "../../Domain/Repository/IProperty";
export class PropertyRepository implements IProperty {
  async findAll(): Promise<Property> {
    try {
      const projectWithUnits = await prismaClient.project.findMany({
        include: {
          unidades: true,
        },
      });

      if (!projectWithUnits) {
        throw new Error("No salio");
      }

      return projectWithUnits as unknown as Property[];
    } catch (error) {
      console.error("Error en el repositorio:", error);
      throw new Error("Error al obtener los proyectos de la base de datos");
    }
  }

  async finById(id: number): Promise<object> {
    try {
      const project = await prismaClient.project.findUnique({
        where: { id },
        include:{
          unidades:true
        }
      });

      if (!project) {
        throw new Error("Id invalido");
      }

      return project;
    } catch (error) {
      console.error(error);
      throw new Error("Esta mal en algo");
    }
  }
}
