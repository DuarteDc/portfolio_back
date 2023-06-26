import { Schema, model } from 'mongoose';
import { ProjectEntity } from '../../domain/project/ProjectEntity';

const ProjectSchema = new Schema<ProjectEntity>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    }
}, {
    timestamps: true,
    versionKey: false,
});


const ProjectModel = model('Project', ProjectSchema);

export default ProjectModel;