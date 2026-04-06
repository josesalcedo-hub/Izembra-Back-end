import { Property } from "../Domain/Entities/Property";
import { IProperty } from "../Domain/Repository/IProperty";

export class UseCaseProperty {
  private propertyRepository: IProperty;

  constructor(propertyRepository: IProperty) {
    this.propertyRepository = propertyRepository;
  }

  async execute(): Promise<Property> {
    try {
      const data = await this.propertyRepository.findAll();

      if (!data) {
        throw new Error("No llegaron los datos");
      }

      return data;
    } catch (error) {
      console.error(`Error al cargar los datos ${error}`);
      throw new Error("Error al cargar los datos");
    }
  }

  async findById(id: number): Promise<object> {
    try {
      const data = await this.propertyRepository.finById(id);

      if (!data) {
        throw new Error("No llegaron los datos");
      }

      return data;
      
    } catch (error) {
      console.error(`Error al cargar los datos ${error}`);
      throw new Error("Error al cargar los datos");
    }
  }
}
