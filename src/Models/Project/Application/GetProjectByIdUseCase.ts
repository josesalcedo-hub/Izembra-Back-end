import { Project } from "../Domain/Entities/Project";
import { IProjectRepository } from "../Domain/Ports/IProjectRepository";

export class GetProjectByIdUseCase {
  private projectRepository: IProjectRepository;

  constructor(projectRepository: IProjectRepository) {
    this.projectRepository = projectRepository;
  }

  async findById(id: string): Promise<Project> {
    return this.projectRepository.findById(id);
  }
}
