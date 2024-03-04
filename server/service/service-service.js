const ServiceSchema = require('../models/service-model');

class ServicesService {
    
    async getAllService(queryParams) {
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
    
            const services = await ServiceSchema.find(filter);
            return services;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new ServicesService();
