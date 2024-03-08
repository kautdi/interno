const { ObjectID } = require('mongodb');
const ProjectSchema = require('../models/project-model');
const projectService = require('../service/project-service');
const ServiceService = require('../service/service-service'); 
const projectModel = require('../models/project-model');


class ProjectController {

    async getAllProjects(req, res, next) {
        try {
            const queryParams = req.query;
            const projects = await projectService.getAllProjects(queryParams);
            return res.json(projects);
        } catch (error) {
            next(error);
        }
    }

    async  getProjectById(req, res, next) {
        try {
            const projectId = req.params.id;
            const project = await projectModel.findOne({ "_id": ObjectId(projectId) });
    
            if (!project) {
                return res.status(404).json({ error: 'Project not found' });
            }
    
            return res.json(project);
        } catch (error) {
            next(error);
        }
    }
    async createProject(req, res, next) {
        const {
            name,
            desc,
            client,
            category,
            tags,
            date,
            link,
            img,
        } = req.body;

        try {
            const newRecord = await ProjectSchema.create({
                name,
                desc,
                client,
                category,
                tags,
                date,
                link,
                img,
            });

            return res.json(newRecord);
        } catch (error) {
            next(error);
        }
    }
    async updateProject(req, res, next) {
        const {
            _id,
            name,
            desc,
            client,
            category,
            tags,
            date,
            link,
            img,
        } = req.body;

        try {
            const newRecord = await ProjectSchema.findByIdAndUpdate(_id,{
                _id,
                name,
                desc,
                client,
                category,
                tags,
                date,
                link,
                img,
            },{ returnOriginal: false, upsert: true });

            return res.json(newRecord);
        } catch (error) {
            next(error);
        }
    }
    async deleteProject(req, res, next) {
        const { _id } = req.body;

        try {
            const deletedRecord = await projectModel.findByIdAndDelete(_id);

            if (!deletedRecord) {
                return res.status(404).json({ message: 'Не удалось найти запись для удаления' });
            }

            return res.json({ message: 'Запись успешно удалена', deletedRecord });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ProjectController();