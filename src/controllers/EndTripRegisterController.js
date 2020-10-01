const EndTripRegister = require("../model/EndTripRegister");
const StartTripRegister = require("../model/StartTripRegister");

const endTripRegisterController = async (req, res) => {
    // get the vehicle_registration from req.params
    const vehicleRegistration = req.params ? req.params : null;
    // if null throw an error
    if (!vehicleRegistration) throw new Error({ message: 'No vehicle registration found'})
    try {
        // if there check if a vehicle started a trip in the db
        const vehicleFound = await StartTripRegister.find({vehicle_registration});
        // check if there are any opened trips currently
        if(!vehicleFound) {
            throw new Error("No currently opened trip");
        }
        const endTripRegister = new EndTripRegister({
            ...req.body,
            trip_id: vehicleFound._id
        });
        await endTripRegister.save();
        res.send(endTripRegister);
    } catch (error) {
        res.send(error);
    }
}

module.exports = {
    endTripRegisterController,
}