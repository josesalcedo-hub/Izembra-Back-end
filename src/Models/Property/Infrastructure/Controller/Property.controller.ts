import { UseCaseProperty } from "../../Application/UseCaseProperty";
import { Response, Request } from "express";
import { PropertyRepository } from "../Repository/PropertyRepository";

export class CProperty {
  private UCaseProperty: UseCaseProperty;

  constructor() {
    const propertyRepository = new PropertyRepository();
    this.UCaseProperty = new UseCaseProperty(propertyRepository);
  }

  async findAllData(req: Request, res: Response): Promise<void> {
    try {
      const foundData = await this.UCaseProperty.execute();

      if (!foundData) {
        res.status(401).json({ message: "No se encontraron datos" });
        return;
      }

      res.status(200).json({
        message: "Datos cargados",
        data: foundData,
      });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  async findById(req: Request, res: Response): Promise<Response> {
    try {
      const id = parseInt(req.params.id as string);

      console.log(id)
      
      if (isNaN(id)) {
        return res.status(400).json({ message: "el id debe ser un  número" });
      }

      const foundData = await this.UCaseProperty.findById(id);

      if (!foundData) {
        return res.status(401).json({ message: "No se encontro el proyecto" });
      }

      return res.json({data:foundData})

    } catch (error: any) {
      return res.status(500).json({ error: error.message });
    }
  }
}
