const AccidentReport = require("../model/AccidentReport");

const reportAccident = async (req, res) => {
    
    try {
        const accidentReport = new AccidentReport(req.body);
        await accidentReport.save();
        res.status(201).send(accidentReport);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

module.exports = {
    reportAccident,
}