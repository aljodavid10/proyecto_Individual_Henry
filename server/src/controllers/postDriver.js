const { Driver, Team } = require("../db.js");

const postDriver = async (req, res) => {
    try {
        const { name, lastName, teams, description, image, nationality, dob } = req.body;

        console.log(name, lastName, teams, description, image, nationality, dob);

        if( ![ name, lastName, teams, description, image, nationality, dob ].every(Boolean) ) 
            return res.status(401).json({message: "Faltan datos"});

        const [newDriver, created ] = await Driver.findOrCreate({ where:{
            name,
            lastName
        }, defaults: {
            description, 
            image, 
            nationality, 
            dob
        }
        });

         const teamsNewDriver = [];

         for(const nameTeam of teams){
            let [team, flag ] = await Team.findOrCreate({ where: { name: nameTeam } });
            teamsNewDriver.push(team);
         }

         
         console.log(teamsNewDriver[0]);
         console.log("--------------------------")
         console.log(newDriver);


         if(created){
            newDriver.addTeams(teamsNewDriver);
         }
         
         res.status(200).send("Corredor creado con exito.")
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = postDriver;