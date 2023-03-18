const express = require("express");
const itemController = require("../controllers/itemController");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();
 
// This section will help you get a list of all the records.
recordRoutes.get("/item", itemController.getRecords);
// This section will help you get a single record by id
recordRoutes.get("/item/:id", itemController.getRecordById);
// This section will help you create a new record.
recordRoutes.post("/item/add", itemController.addRecord);
// This section will help you update a record by id.
recordRoutes.post("/update/:id", itemController.updateRecordById);
// This section will help you delete a record
recordRoutes.delete("/:id", itemController.deleteRecordById);

module.exports = recordRoutes;