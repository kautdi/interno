const serviceService = require('../service/service-service');
const ServiceService = require('../service/service-service'); 


class ServiceController {
    async getService(req, res, next) {
        try {
            const queryParams = req.query;
            const services = await serviceService.getAllService(queryParams);
            return res.json(services);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ServiceController();