const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const empRouter = require("./routers/employee-router");

const professionalRouter = require('./routers/professional-router');

const app = express();
const port = process.env.PORT || 5000;

let corsOptions = {
  origin: ["http://localhost:4200"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.use("/employee", empRouter);
app.use("/professional",professionalRouter);

app.listen(port, () => {
  console.log("listening port==>", port);
});
