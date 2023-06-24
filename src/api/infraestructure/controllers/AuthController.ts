import { Request, Response, NextFunction } from 'express';
import { AuthUseCase } from '../../application/auth/AuthUseCase';

export class AuthController {

    constructor(private readonly authUseCase: AuthUseCase) {
        this.login = this.login.bind(this);
    }

    public async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body;
            const response = await this.authUseCase.signIn(email, password);
            res.json({ response });
        } catch (error) {
            console.log(error);
        }
    }

}