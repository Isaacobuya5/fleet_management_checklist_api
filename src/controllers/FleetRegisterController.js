const FleetRegister  = require("../model/FleetRegister");



const registerVehicle = async (req, res) => {
    // getting details of request body
    try {
        const registeredVehicle = new FleetRegister(req.body);
        await registeredVehicle.save();
        res.status(201).send(registeredVehicle);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

const getVehicleDetails =  async (req, res) => {
    try {
        const registeredVehicle = await FleetRegister.find({});
        res.send(registeredVehicle);
    } catch (error) {
        res.status().send(error);
    }
}

module.exports = {
    registerVehicle,
    getVehicleDetails
}