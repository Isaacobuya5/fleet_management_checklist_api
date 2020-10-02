const StartTripRegister = require("../model/StartTripRegister");
const FleetRegister  = require("../model/FleetRegister");

const startTripDetails = async (req, res) => {
    try {   
        const startTripRegister = new StartTripRegister(req.body);
        await startTripRegister.save();
        res.status(201).send(startTripRegister);
        
    } catch (error) {
        res.status(400).send(error);
    }
}

// change status of a trip
const changeTripStatus = async (req, res) => {
    const vehicle_registration = req.params;
    try {  
        // change status of this vehicle to started if not started already
        // first check if this trip is started already
        // find the vehicle first
        const vehicle = await FleetRegister.findOne({ vehicle_registration });
        // just ensure to throw error if this vehicle not found
        if (!vehicle) res.status(404).send("Vehicle not registered")

        // destructuring the status
        const { status } = vehicle;
        //  if not started, we want to change its status
        if (status == "not started") {
            await FleetRegister.update({ status: "trip started" });
            return res.send("Successfuly started");
        } else {
            // we don't want to start an already started trip
            return res.status(400).send("Trip is in progress");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
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
    removeAllRunningTrips,
    changeTripStatus
}