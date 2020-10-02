const EndTripRegister = require("../model/EndTripRegister");
const StartTripRegister = require("../model/StartTripRegister");

const endTripRegisterController = async (req, res) => {

    try {
        // if there check if a vehicle started a trip in the db
        const endTripRegister = new EndTripRegister(req.body);
        await endTripRegister.save();
        res.send(endTripRegister);
    } catch (error) {
        res.send(error);
    }
}

// change status of a trip to ended
const changeTripStatusToEnded = async (req, res) => {
    const { vehicle_registration } = req.params;

    try {  
        // change status of this vehicle to ended if started already
        // first check if this trip is started already
        // find the vehicle first
        const vehicle = await FleetRegister.findOne({ vehicle_registration });
        // just ensure to throw error if this vehicle not found
        if (!vehicle) res.status(404).send("Vehicle not registered")

        // destructuring the status
        const { status } = vehicle;
        //  if  started, we want to change its status to ended
        if (status == "trip started") {
            await FleetRegister.update({ status: "trip ended" });
            return res.status(200).send("Successfuly ended trip");
        } else {
            // we don't want to start an already started trip
            return res.status(400).send("Trip is not in progress");
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    endTripRegisterController,
    changeTripStatusToEnded
}