const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true })
  /* .then(()=> saveTeams()) */
    .then(() => {
      server.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
      })
    })
    .catch(error => console.error(error));

/* const URL = "http://localhost:5000/drivers";

async function saveTeams(){
  const teamsBD = [];
  try{
        const { data } = await axios.get(URL);
    
        const teams = data.filter(driver => !(driver.teams === undefined ));
    
        console.log("paso 2");

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
        console.log("Datos guardados")
  }catch(error){
    console.log(error.message);
  }
} */


/* 
URLSearchParams const queryString = new URLSearchParams(terms).toString();

    const videogames = await axios(`${HOST}/videogames?${queryString}`);
 */