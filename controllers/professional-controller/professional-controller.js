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
  console.log("database(professional) connected successfully!");
});

exports.insertProfessional = (req, res) => {
  const empdata = req.body;
  const languageString = empdata.languages.join(", ");
  const skillsString = empdata.skills.join(", ");
  db.query(
    Queries.insertProfessional,
    [
      empdata.empid,
      empdata.education,
      empdata.domain,
      languageString,
      skillsString,
      empdata.joindate,
      empdata.basicsalary,
      empdata.hra,
      empdata.da,
      empdata.insurance,
      empdata.pf,
      empdata.netsalary,
      empdata.allowence,
      empdata.takehomesalary,
    ],
    (err, result) => {
      if (err) {
        console.log("error", err);
        console.log("Data====>>", empdata);
        send500Error(res, "Error in posting data");
      } else {
        console.log("result", result);
        send200AndData(res, result);
        console.log("professional success!!!");
      }
    }
  );
};

exports.getProffessional = (req, res) => {
  db.query(Queries.getprofQuery, (err, result) => {
    if (err) {
      console.log("error", err);
      send500Error(res, "error in getting proffessional data");
    } else {
      console.log("response", result);
      send200AndData(res, result);
    }
  });
};

exports.getSingleData = (req, res) => {
  const getId = req.params.id;
  db.query(Queries.SingleDataProf, getId, (err, result) => {
    if (err) {
      console.log("error in getting single data-->", err);
      send500Error(res, "error");
    } else {
      console.log("result single data", result);
      send200AndData(res, result);
    }
  });
};

exports.updateProfDetials = (req, res) => {
  const getId = req.params.id;
  const empdata = req.body;
  const languageString = empdata.languages.join(", ");
  const skillsString = empdata.skills.join(", ");
  db.query(
    Queries.updateProfQuery,
    [
      empdata.empid,
      empdata.education,
      empdata.domain,
      languageString,
      skillsString,
      empdata.joindate,
      empdata.basicsalary,
      empdata.hra,
      empdata.da,
      empdata.insurance,
      empdata.pf,
      empdata.netsalary,
      empdata.allowence,
      empdata.takehomesalary,
      getId,
    ],
    (err, result) => {
      if (err) {
        console.log("error in getting single data-->", err);
        send500Error(res, "error");
      } else {
        console.log("Result in updating data-->", result);
        send200AndData(res, result);
      }
    }
  );
};

exports.deleteProfDetial = (req, res) => {
  const delId = req.params.id;
  db.query(Queries.deleteProfQuery, delId, (err, result) => {
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

async function send500Error(res, message) {
  await res.status(500).send(message);
  return;
}
