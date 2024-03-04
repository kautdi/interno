const { ObjectID } = require('mongodb');
const projectModel = require('../models/project-model');
const projectService = require('../service/project-service');
const ServiceService = require('../service/service-service'); 


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

}

module.exports = new ProjectController();