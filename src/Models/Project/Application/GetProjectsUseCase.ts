import { Project } from "../Domain/Entities/Project";
import { IProjectRepository } from "../Domain/Ports/IProjectRepository";

export class GetProjectsUseCase {
  private projectRepository: IProjectRepository;

  constructor(projectRepository: IProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.findAll();
  }
}
