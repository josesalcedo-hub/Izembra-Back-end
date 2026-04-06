import { Property } from "../Entities/Property";

export interface IProperty {
  findAll(): Promise<Property>;
  finById(id:number):Promise <object>;
}
