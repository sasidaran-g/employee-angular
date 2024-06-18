var express = require("express");
var router = express.Router();
const errorHandler = require("../handler/error-handler/error.handler");
const {
  insertEmployee,
  getPersonal,
  getSingleEmp,
  updateEmployee,
  deleteEmployee,
} = require("../controllers/employee-controller/employee.controller");

router.post("/insertEmployee", errorHandler(insertEmployee));

router.get("/getEmployeeData", errorHandler(getPersonal));

router.get("/getSingleData/:id", errorHandler(getSingleEmp));

router.put("/updateEmp/:id", errorHandler(updateEmployee));

router.delete("/deleteEmp/:id", errorHandler(deleteEmployee));

module.exports = router;
