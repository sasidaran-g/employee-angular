var express = require("express");
var router = express.Router();
const errorHandler = require("../handler/error-handler/error.handler");
const {
  insertProfessional,
  getProffessional,
  getSingleData,
  updateProfDetials,
  deleteProfDetial,
} = require("../controllers/professional-controller/professional-controller");

router.post("/insertProffesional", errorHandler(insertProfessional));

router.get("/getProfessional", errorHandler(getProffessional));

router.get("/singleProfessional/:id", errorHandler(getSingleData));

router.put("/UpdateProf/:id", errorHandler(updateProfDetials));

router.delete("/deleteProf/:id", errorHandler(deleteProfDetial));

module.exports = router;
