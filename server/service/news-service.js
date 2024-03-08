const NewsShema = require('../models/news-model');


class NewsService {
    
    async  getAllNews(queryParams) {
        try {
            const filter = {};
    
            if (queryParams.head) {
                filter.head = { $regex: new RegExp(queryParams.head, 'i') };
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
    
            const news = await NewsShema.find(filter);
            return news;
        } catch (error) {
            throw error;
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
    
            try {
                const newRecord = await NewsShema.create({
                    head,
                    date,
                    category,
                    imgLink,
                    desc,
                    citata,
                    headTwo,
                    descTwo,
                    Tag
                });
    
                return res.json(newRecord);
            } catch (error) {
                next(error);
            }
        
    }
}

module.exports = new NewsService();
