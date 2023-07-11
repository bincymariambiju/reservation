const controller = require("../controllers/passengers.controller")

module.exports = function (app) {
  
  

  app.post("/passenger/createRecord", controller.createRecord);

  app.post("/passenger/updateRecord", controller.updateRecord);

  app.post("/passenger/getList", controller.getList);

  app.post("/passenger/deleteRecord", controller.deleteRecord);

};