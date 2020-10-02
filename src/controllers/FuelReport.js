const FuelReport = require("../model/FuelingReport");

const fuelReport = async (req, res) => {
    // const { vehicle_registration, fuel_station, litres, garage, parts_needed, comments, date, time, lat, long } = req.body;
    const { fuel_station } = req.body;
    const [ selectedFuelStation ] = fuel_station;
    try {
        const fueling = new FuelReport({
            ...req.body,
            fuel_station: selectedFuelStation
        });
        await fueling.save();
        res.status(201).send(fueling);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

module.exports = {
    fuelReport,
}