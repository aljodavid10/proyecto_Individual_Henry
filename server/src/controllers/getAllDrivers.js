const axios = require("axios");
const URL = "http://localhost:5000/drivers"; 
const { Driver } = require("../db.js");

const getAllDrivers = async (req, res) => {
    try {
        const { data } = await axios.get(URL);
        const driversAPI = data;

        const driversDB = await Driver.findAll();
        
        const arrayAllDrivers = [ 
            ...driversAPI,
            ...driversDB
        ]

        return arrayAllDrivers != null
                ? res.json(arrayAllDrivers)
                : res.status(404).send("Data not found.");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = getAllDrivers;