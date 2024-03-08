const newsModel = require('../models/news-model');
const ProjectModel = require('../models/project-model');
const TeamsModel = require('../models/teams-model');


class TeamsService {
    
    async getAllTeams(queryParams) {
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
    
            const teams = await TeamsModel.find(filter);
            return teams;
        } catch (error) {
            throw error;
        }
    }
    
}

module.exports = new TeamsService();
