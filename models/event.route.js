const {
  getAllEvent,
  createEvent,
  getSingleEvent,
  editSingleEvent,
} = require("../controllers/event.controller");

const eventRoute = require("express").Router();

eventRoute.route("/").post(createEvent).get(getAllEvent);

eventRoute.route("/:eventId").get(getSingleEvent).patch(editSingleEvent);

module.exports = eventRoute;
