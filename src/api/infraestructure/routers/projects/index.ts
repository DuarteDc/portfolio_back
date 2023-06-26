import { Router, Request, Response } from 'express';

import ProjectModel from '../../models/ProjectModel';
import { ProjectController } from '../../controllers/ProjectController';
import { ProjectRepository } from '../../repositories/project/ProjectRepository';
import { ProjectUseCase } from '../../../application/project/ProjectUseCase';

import { authMiddleware } from '../../../../shared/infraestructure/middlewares/authMiddleware';

const projectRouter = Router();

const projectRepository = new ProjectRepository(ProjectModel);
const projectUseCase    = new ProjectUseCase(projectRepository);
const projectController = new ProjectController(projectUseCase);

projectRouter
    .get('/', projectController.getProjects)
    .get('/:id', projectController.getProject)
    .post('/', projectController.createProject)


export default projectRouter;