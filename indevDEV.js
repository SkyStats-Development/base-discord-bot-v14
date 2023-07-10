// this file and all files it uses are licensed under SkyStats Development License viewable in the LICENSE file
require("dotenv").config();
process.env.TOKEN = process.env.DEV;
process.env.ID = process.env.DEVID;

process.on("uncaughtException", function (err) {
  console.log(err);
});
const app = require("./src/Application");
app
  .register()
  .then(() => {
    app.connect();
  })
  .catch((err) => {
    console.error(err);
  });
