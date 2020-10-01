const IncidentReport = require("../model/IncidentReport");

const reportIncident = async (req, res) => {
    
    try {
        const incidentReport = new IncidentReport(req.body);
        await incidentReport.save();
        res.status(201).send(incidentReport);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

module.exports = {
    reportIncident
}