const Queries = require("../../queries/query");
const mysql = require("mysql");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee",
});

db.connect((err) => {
  if (err) throw err;
  console.log("database connected successfully!");
});

exports.insertEmployee = (req, res) => {
  const EmpData = req.body;
  db.query(
    Queries.insertData,
    [ EmpData.empname, parseInt(EmpData.empage), EmpData.empemail, EmpData.empmobile, EmpData.dob, EmpData.gender],
    (err, result) => {
      if (err) {
        console.log("error", err);
        console.log("Data====>>", EmpData);
        send500Error(res, "Error in posting data");
      } else {
        console.log("result in insert", result);
        send200AndData(res, result);
        console.log("employee success!!!");
      }
    }
  );
};

exports.getPersonal = (req, res) => {
  db.query(Queries.getPersonal, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting personal data");
    } else {
      console.log("response in getpersonal", result);
      send200AndData(res, result);
    }
  });
};

exports.getSingleEmp = (req, res) => {
  const getId = req.params.id;
  db.query(Queries.SingleData, getId, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting the data");
    } else {
      send200AndData(res, result);
      console.log("result in single data==>", result);
    }
  });
};

exports.updateEmployee = (req, res) => {
  const getId = req.params.id;
  const updateData = req.body;
  db.query(
    Queries.updateData,
    [ updateData.editname, updateData.editage, updateData.editemail, updateData.editmobile, updateData.dob, updateData.gender, getId],
    (err, result) => {
      if (err) {
        console.log("error in update", err);
        send500Error(res, "error in updating data");
      } else {
        console.log("result in update-->", result);
        send200AndData(res, result);
      }
    }
  );
};

exports.deleteEmployee = (req, res) => {
  const delId = req.params.id;
  db.query(Queries.deleteData, delId, (err, result) => {
    if (err) {
      console.log("error in deleting", err);
      send500Error(res, "err in deleting data");
    } else {
      console.log("result in delete", result);
      send200AndData(res, result);
    }
  });
};

function send200AndData(res, result) {
  res.status(200).json({ status: "Success", data: result });
  return;
}

function send500Error(res, message) {
  res.status(500).send(message);
  return;
}
