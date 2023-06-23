export interface ProjectEntity {
    _id         : string;
    name        : string;
    desctiption : string;
    status      : boolean;
    images      : Array<ProjectImage>;
    createdAt   : Date;
    updatedAt   : Date;

}

interface ProjectImage {
    _id: string;
    url: string;

}