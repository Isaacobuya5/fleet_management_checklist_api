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

const getVehicleDetailsByReg =  async (req, res) => {
    const regNum = req.params;
    try {
        const registeredVehicle = await FleetRegister.find({vehicle_registration: regNum});
        if (registeredVehicle) {
        res.status(200).send(registeredVehicle);
        } else {
            res.status(400).end();
        }
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = {
    registerVehicle,
    getVehicleDetailsByReg
}