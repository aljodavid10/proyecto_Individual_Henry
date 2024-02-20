const axios = require("axios");
const URL = "http://localhost:5000/drivers?name.forename=";
const { Driver } = require("../db.js");

const getDriverByName = async (req, res) => {
    try {
        const name = req.query.name;
    
        const nameLowerCase = name.toLowerCase();
    
        const nameAPI = nameLowerCase.replace(/^\w/, c => c.toUpperCase());
    
        const { data } = await axios.get(`${URL}${nameAPI}`);
        console.log(nameAPI)

        const driverDB = await Driver.findAll({
            where:{
                name
            }
        });
        if(data || driverDB){
            const driversFind = [
                ...data,
                ...driverDB
            ]
            return res.status(200).json(driversFind)
        }
        return res.status(404).send("Conductor no encontrado");
        
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = getDriverByName;