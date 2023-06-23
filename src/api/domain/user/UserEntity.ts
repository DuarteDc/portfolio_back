export interface UserEntity {
    _id: string;
    name: string;
    last_name:string;
    picture: string;
    createdAt        :   NativeDate;
    updatedAt        :   NativeDate;
}