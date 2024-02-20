const router = require("express").Router();
const getAllDrivers = require("../controllers/getAllDrivers.js");
const getDriverByID = require("../controllers/getDriverByID.js");
const getDriverByName = require("../controllers/getDriverByName.js");
const getTeams = require("../controllers/getTeams.js");
const postDriver = require("../controllers/postDriver.js");

router.get("/drivers", (req, res) =>{
    const name = req.query.name
    if(name)
        getDriverByName(req, res);
    else
        getDriverByID;
    });    
router.get("/drivers/:id", getDriverByID);
router.get("/teams",getTeams);
router.post("/drivers", postDriver);

module.exports = router;
