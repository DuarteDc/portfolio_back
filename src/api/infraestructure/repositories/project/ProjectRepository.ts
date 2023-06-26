import { Model } from 'mongoose';
import { ProjectRepository as ProjectConfig } from '../../../domain/project/ProjectUseCase';
import { BaseRepository } from '../BaseRepository';

export class ProjectRepository extends BaseRepository implements ProjectConfig {

    constructor (protected readonly ProjectModel: Model<any>) {
        super(ProjectModel);
    }
    
}