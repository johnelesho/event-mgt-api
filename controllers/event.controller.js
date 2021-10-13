const EventModel = require("../models/Event.model");

exports.createEvent = async (req, res) => {
  try {
    const event = await EventModel.create(req.body);
    res.status(201).json({
      status: "Create Successful",
      data: event,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.name,
      message: error.message,
    });
  }
};

exports.getSingleEvent = async (req, res) => {
  try {
    const event = await EventModel.findById(req.params.eventId);
    if (!event) {
      return res.status(404).json({
        status: "Event not found",
        data: null,
      });
    }
    return res.status(200).json({
      status: "Successful",
      data: event,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.name,
      message: error.message,
    });
  }
};

exports.editSingleEvent = async (req, res) => {
  const { category, scheduledDate, startTime, venue, duration, noOfParticipants } =
    req.query;
  let event;

  event = await EventModel.findByIdAndUpdate(
    req.params.eventId,
    {
      $set: {
        venue,
        startTime,
        duration,
        noOfParticipants,
        scheduledDate,
      },
      $addToSet: {
        category,
      },
    },
    { new: true },
  );

  //   if (category) {
  //     event = await EventModel.findByIdAndUpdate(
  //       req.params.eventId,
  //       {
  //         $addToSet: {
  //           category,
  //         },
  //       },
  //       { new: true },
  //     );
  //   }
  //   if (scheduledDate) {
  //     event = await EventModel.findByIdAndUpdate(
  //       req.params.eventId,
  //       {
  //         $set: {
  //           scheduledDate,
  //         },
  //       },
  //       { new: true },
  //     );
  //   }
  return res.status(200).json({
    status: "Update Successful",
    data: event,
  });
};

exports.addCategory = (req, res) => {
  res.status(201).json({
    status: "Update Successful",
    data: req.param.eventId,
  });
};

exports.getEventByDate = (req, res) => {
  res.status(201).json({
    status: "Update Successful",
    data: req.param.eventDate,
  });
};

exports.getAllEvent = async (req, res) => {
  try {
    const events = await EventModel.find();
    res.status(201).json({
      status: "Successful",
      data: events,
    });
  } catch (error) {}
  res.status(500).json({
    error: error.name,
    message: error.message,
  });
};
