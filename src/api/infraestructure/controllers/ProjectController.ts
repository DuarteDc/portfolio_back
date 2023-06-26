import { Request, Response } from 'express';
import { ProjectUseCase } from '../../application/project/ProjectUseCase';

export class ProjectController {
    constructor(private readonly projectUseCase: ProjectUseCase) {
        this.getProjects = this.getProjects.bind(this);
        this.getProject = this.getProject.bind(this);
        this.createProject = this.createProject.bind(this);
    }

    public async getProjects(req: Request, res: Response) {
        try {
            const response = await this.projectUseCase.getAllProjects();
            res.json({ response })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Hubo un error al consultar los projectos' });
        }
    }

    public async getProject(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const response = await this.projectUseCase.getOneProject(id);
            res.json({ response })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Hubo un error al consultar los projectos' });
        }
    }

    public async createProject(req: Request, res: Response) {
        console.log('xd')
        const { name, description, image } = req.body;
        try {
            const response = await this.projectUseCase.createOneProject({ name, description, image });
            res.json({ response })
        } catch (error) {
            console.log(error)
            res.status(500).json({ message: 'Hubo un error al consultar los projectos' });
        }
    }

}