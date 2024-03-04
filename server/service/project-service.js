const newsModel = require('../models/news-model');
const ProjectModel = require('../models/project-model');


class ProjectService {
    
    async  getAllProjects(queryParams) {
        try {
            const filter = {};
    
            if (queryParams.name) {
                filter.name = { $regex: new RegExp(queryParams.name, 'i') };
            }
    
            if (queryParams.desc) {
                filter.desc = { $regex: new RegExp(queryParams.desc, 'i') };
            }
    
            if (queryParams.category) {
                filter.category = { $regex: new RegExp(queryParams.category, 'i') };
            }
    
            if (queryParams._id) {
                filter._id = queryParams._id; // No need for regex for _id
            }
    
            const projects = await ProjectModel.find(filter);
            return projects;
        } catch (error) {
            throw error;
        }
    }

    async getProjectById(projectId) {
        try {
            const project = await ProjectModel.findById(projectId);
            return project;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ProjectService();
