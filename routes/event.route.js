const {
  getAllEvent,
  createEvent,
  getSingleEvent,
  editSingleEvent,
} = require("../controllers/event.controller");

const eventRoute = require("express").Router();

eventRoute.route("/").post(createEvent).get(getAllEvent);

eventRoute.route("/:eventId").get(getSingleEvent).patch(editSingleEvent);

// eventRoute.patch("/:eventId?category="Grace"&scheduledDate=vmdld&venue)
module.exports = eventRoute;
