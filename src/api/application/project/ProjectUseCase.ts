import { ProjectEntity } from '../../domain/project/ProjectEntity';

import { ProjectRepository } from '../../domain/project/ProjectUseCase';
import { ErrorHandler } from '../../../shared/domain/ErrorHandler.';

export class ProjectUseCase {

    constructor(private readonly projectRepository: ProjectRepository) { }

    async getAllProjects(): Promise<Array<ProjectEntity>> {
        return await this.projectRepository.findAll();
    }

    async getOneProject(_id: string): Promise<ProjectEntity | ErrorHandler> {
        let project = await this.projectRepository.findById(_id);
        if(!project) return new ErrorHandler('El projecto no es valido o no existe', 400);
        return project;
    }

    async createOneProject(object: Object): Promise<ProjectEntity | ErrorHandler> {
        return await this.projectRepository.createOne(object);
    }

}