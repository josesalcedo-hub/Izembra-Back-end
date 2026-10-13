import { GetProjectsUseCase } from "../../Application/GetProjectsUseCase";
import { GetProjectByIdUseCase } from "../../Application/GetProjectByIdUseCase";
import { Response, Request } from "express";
import { ProjectRepository } from "../Adapters/ProjectRepository";

export class ControllerProject {
  private getProjectsUseCase: GetProjectsUseCase;
  private getProjectByIdUseCase: GetProjectByIdUseCase;

  constructor() {
    const projectRepository = new ProjectRepository();
    this.getProjectsUseCase = new GetProjectsUseCase(projectRepository);
    this.getProjectByIdUseCase = new GetProjectByIdUseCase(projectRepository);
  }

  async findAllData(req: Request, res: Response): Promise<void> {
    try {
      const project = await this.getProjectsUseCase.findAll();

      res.status(200).json({
        message: "proyectos encontrados",
        data: project,
      });
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Error interno del servidor";

      res.status(500).json({ error: message });
    }
  }

  async findProjectById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    if (typeof id !== "string") {
      return res.status(400).json({
        message: "El ID del proyecto no es válido",
      });
    }

    try {
      const project = await this.getProjectByIdUseCase.findById(id);

      return res.status(200).json({
        message: "Proyecto encontrado",
        data: project,
      });
    } catch (error: unknown) {
      const message =
        error instanceof Error ? error.message : "Error interno del servidor";

      return res.status(500).json({
        error: message,
      });
    }
  }
}
