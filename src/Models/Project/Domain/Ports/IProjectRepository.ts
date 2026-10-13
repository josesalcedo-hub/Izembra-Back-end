import { Project } from "../Entities/Project";

export interface IProjectRepository {
  findAll(): Promise<Project[]>;
  findById(id:string):Promise <Project>;
}
