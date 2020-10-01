const StartTripRegister = require("../model/StartTripRegister");
const FleetRegister  = require("../model/FleetRegister");

const startTripDetails = async (req, res) => {
    // first check if the vehicle is in the database
    const { vehicle_registration } = req.body;
    try {
        const registeredVehicle = await FleetRegister.find({ vehicle_registration });
        console.log(registeredVehicle.length);
        // if vehicle not registered throw an error
        if (registeredVehicle.length == 0) {
            return res.status(500).send({ error: "Vehicle not registered yet"})
        }
        const startTripRegister = new StartTripRegister(req.body);
        await startTripRegister.save();
        res.status(201).send(startTripRegister);
    } catch (error) {
        res.status(400).send(error);
    }
}

// view all started registered vehicles
const runningTrips = async (req, res) => {
    try {
        const currentTrips = await StartTripRegister.find({});
        res.send(currentTrips);
    } catch (error) {
        res.send(error);
    }
}

// delete all current trips
const removeAllRunningTrips = async (req, res) => {
    try {
        await StartTripRegister.deleteMany({});
        res.send({message: 'Delete succesful'});
    } catch (error) {
        res.send(error)
    }
}

module.exports = {
    startTripDetails,
    runningTrips,
    removeAllRunningTrips
}