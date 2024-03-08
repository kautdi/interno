const newsModel = require('../models/news-model');
const newsService = require('../service/news-service');
const ServiceService = require('../service/service-service'); 


class NewsController {
    async getNews(req, res, next) {
        try {
            const queryParams = req.query;
            const news = await newsService.getAllNews(queryParams);
            return res.json(news);
        } catch (error) {
            next(error);
        }
    }
    async createNew(req, res, next) {
        const {
            head,
            date,
            category,
            imgLink,
            desc,
            citata,
            headTwo,
            descTwo,
            Tag
        } = req.body;
        console.log(req.body);

        try {
            const newRecord = await newsModel.create({
                head,
                date,
                category,
                imgLink,
                desc,
                citata,
                headTwo,
                descTwo,
                Tag
            }, { new: true });

            return res.json(newRecord);
        } catch (error) {
            next(error);
        }
    
    }
    async updateNew(req, res, next) {
        const {
            _id,
            head,
            date,
            category,
            imgLink,
            desc,
            citata,
            headTwo,
            descTwo,
            Tag
        } = req.body;

        try {
            const newRecord = await newsModel.findByIdAndUpdate(_id, {
                _id,
                head,
                date,
                category,
                imgLink,
                desc,
                citata,
                headTwo,
                descTwo,
                Tag
            },{ returnOriginal: false, upsert: true });

            return res.json(newRecord);
        } catch (error) {
            next(error);
        }
    
    }
    async deleteNews(req, res, next) {
        const { _id } = req.body;

        try {
            const deletedRecord = await newsModel.findByIdAndDelete(_id);

            if (!deletedRecord) {
                return res.status(404).json({ message: 'Не удалось найти запись для удаления' });
            }

            return res.json({ message: 'Запись успешно удалена', deletedRecord });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new NewsController();