
const newsService = require('../service/news-service');
const ServiceService = require('../service/service-service'); 
const teamsService = require('../service/teams-service');


class TeamsController {
    async getTeams(req, res, next) {
        try {
            const queryParams = req.query;
            const teams = await teamsService.getAllTeams(queryParams);
            return res.json(teams);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TeamsController();