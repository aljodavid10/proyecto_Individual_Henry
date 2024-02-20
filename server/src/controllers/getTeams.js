const axios = require("axios");
const URL = "http://localhost:5000/drivers";
const { Team } = require("../db.js");
const teamsBD = [];


const getTeams = async (req, res) => {
    try {
        console.log("paso 1")
        const { data } = await axios.get(URL);
    
        const teams = data.filter(driver => !(driver.teams === undefined ));
    
        console.log("paso 2")

        for (const item of teams) {
            const teamsSeparados = item.teams.split(',').map(team => team.trim());
            teamsBD.push(...teamsSeparados);
        }

        for (const teamName of teamsBD) {
            try {
              await Team.findOrCreate({
                where: { name: teamName }
              });
            } catch (error) {
              console.error('Error al guardar el equipo en la base de datos:', error);
            }
        }
        return res.status(200).json(await Team.findAll());
        
    } catch (error) {
        return res.status(500).send(error.message);
    }

}

async function procesarDatos(data) {
    
}

module.exports = getTeams;