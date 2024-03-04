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
}

module.exports = new NewsController();