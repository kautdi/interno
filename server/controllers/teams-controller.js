
const teamsModel = require('../models/teams-model');
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
    async createTeamMember(req, res, next) {
        const {
            fio,
            img,
            position,
            descPeople,
            email,
            phone,
            link,
            biograph,
            simpleFunc,
            firstquesthead,
            firstquestdesc,
            secondquesthead,
            secondquestdesc,
            threequesthead,
            threequestdesc
        } = req.body;

        try {
            const newTeamMember = await TeamsModel.create({
                fio,
                img,
                position,
                descPeople,
                email,
                phone,
                link,
                biograph,
                simpleFunc,
                firstquesthead,
                firstquestdesc,
                secondquesthead,
                secondquestdesc,
                threequesthead,
                threequestdesc
            });

            return res.json(newTeamMember);
        } catch (error) {
            next(error);
        }
    }
    async updateTeamMember(req, res, next) {
        const {
            _id,
            fio,
            img,
            position,
            descPeople,
            email,
            phone,
            link,
            biograph,
            simpleFunc,
            firstquesthead,
            firstquestdesc,
            secondquesthead,
            secondquestdesc,
            threequesthead,
            threequestdesc
        } = req.body;

        try {
            const newTeamMember = await TeamsModel.findByIdAndUpdate(_id,{
                fio,
                img,
                position,
                descPeople,
                email,
                phone,
                link,
                biograph,
                simpleFunc,
                firstquesthead,
                firstquestdesc,
                secondquesthead,
                secondquestdesc,
                threequesthead,
                threequestdesc
            }, { returnOriginal: false, upsert: true });

            return res.json(newTeamMember);
        } catch (error) {
            next(error);
        }
    }
    async deleteTeamMember(req, res, next) { 
        const { _id } = req.body;

        try {
            const deletedRecord = await teamsModel.findByIdAndDelete(_id);

            if (!deletedRecord) {
                return res.status(404).json({ message: 'Не удалось найти запись для удаления' });
            }

            return res.json({ message: 'Запись успешно удалена', deletedRecord });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new TeamsController();