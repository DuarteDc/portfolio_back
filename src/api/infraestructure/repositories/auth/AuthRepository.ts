import { Model, Schema } from 'mongoose';
import { AuthRepository as AuthConfig } from '../../../domain/auth/AuthRepository';
import { UserEntity } from '../../../domain/user/UserEntity';
import { BaseRepository } from '../BaseRepository';


export class AuthRepository extends BaseRepository implements AuthRepository {

    constructor(protected readonly UserModel: Model<any>){
        super(UserModel);
    }

}