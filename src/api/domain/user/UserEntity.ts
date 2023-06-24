export interface UserEntity {
    _id         : string;
    name        : string;
    email       : string;
    password    : string;
    status      : boolean;
    createdAt   : NativeDate;
    updatedAt   : NativeDate;
}