const ServiceReport = require("../model/ServicingReport");

const serviceReport = async (req, res) => {
    
    try {
        const service = new ServiceReport(req.body);
        await service.save();
        res.status(201).send(service);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

module.exports = {
    serviceReport,
}