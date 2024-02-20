const axios = require("axios");
const URL = "http://localhost:5000/drivers/";
const { Driver } = require("../db.js");

const getDriver = async (req, res) => {
    try {
        const id = req.params.id;
        if((isNaN(id)) && (id.length === 36)){
            const driverDB = await Driver.findOne({
                where:{
                    id
                }
            });
            if(driverDB)
                return res.json(driverDB)
        }else if(Number(id)){
            console.log(id)
            const dato = await axios.get(`${URL}${id}`);
            
            if(dato){
                const {data} = dato
                return res.json(data);
            }
        }else
            return res.status(404).send(".");
    } catch (error) {
        if(res.status === 404)
            return res.status(404).send("Conductor no encontrado.");
        return res.status(500).send(error.message);
    }
}

module.exports = getDriver;