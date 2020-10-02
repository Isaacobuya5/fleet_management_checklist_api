const ServiceReport = require("../model/ServicingReport");

const serviceReport = async (req, res) => {
    const { vehicle_registration, current_odometer_reading, service_due_date, garage, parts_needed, comments, date, time, lat, long } = req.body;
    const [ selectedGarage ] = garage;
    try {
        const service = new ServiceReport({
            vehicle_registration,
            current_odometer_reading, 
            service_due_date, 
            garage: selectedGarage, 
            parts_needed, 
            comments
        });
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