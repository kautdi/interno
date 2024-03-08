const ServiceModel = require('../models/service-model');

class ServicesService {
    
    async getAllServices(queryParams) {
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
    
            const services = await ServiceModel.find(filter);
            return services;
        } catch (error) {
            throw error;
        }
    }

    async createService(head, desc, headDesc, descSingle, videoLink) {
        try {
            const newService = await ServiceModel.create({
                head,
                desc,
                headDesc,
                descSingle,
                videoLink
            });
            return newService;
        } catch (error) {
            console.error("Ошибка при создании сервиса:", error);
            throw error;
        }
    }
    async updateService(id, head, desc, headDesc, descSingle, videoLink) {
        try {
            const newService = await ServiceModel.findByIdAndUpdate(id,{
                head,
                desc,
                headDesc,
                descSingle,
                videoLink
            });
            return newService;
        } catch (error) {
            console.error("Ошибка при создании сервиса:", error);
            throw error;
        }
    }
}

module.exports = new ServicesService();
