const serviceModel = require('../models/service-model');
const serviceService = require('../service/service-service');

class ServiceController {
    async getServices(req, res, next) {
        try {
            const queryParams = req.query;
            const services = await serviceService.getAllServices(queryParams);
            return res.json(services);
        } catch (error) {
            next(error);
        }
    }

    async createServiceCont(req, res, next) {
        const { head, desc, headDesc, descSingle, videoLink } = req.body;

        try {
            const service = await serviceService.createService(head, desc, headDesc, descSingle, videoLink);
            return res.json(service);
        } catch (error) {
            next(error);
        }
    }
    async updateService(req, res, next) {
        const {
            _id,
            head,
            desc,
            headDesc,
            descSingle,
            videoLink,
        } = req.body;

        try {
            const newRecord = await serviceModel.findByIdAndUpdate(_id,{
                _id,
                head,
                desc,
                headDesc,
                descSingle,
                videoLink,
            },{ returnOriginal: false, upsert: true });

            return res.json(newRecord);
        } catch (error) {
            next(error);
        }
    }
    async deleteService(req, res, next) {
        const { _id } = req.body;

        try {
            const deletedRecord = await serviceModel.findByIdAndDelete(_id);

            if (!deletedRecord) {
                return res.status(404).json({ message: 'Не удалось найти запись для удаления' });
            }

            return res.json({ message: 'Запись успешно удалена', deletedRecord });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = new ServiceController();
