import { Model } from 'mongoose';
import { AuthRepository as AuthConfig } from '../../../domain/auth/AuthRepository';
import { BaseRepository } from '../BaseRepository';
export class AuthRepository extends BaseRepository implements AuthConfig {

    constructor(protected readonly UserModel: Model<any>){
        super(UserModel);
    }

}