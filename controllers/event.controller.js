exports.createEvent = (req, res) => {
  res.status(201).json({
    status: "Create Successful",
    data: req.body,
  });
};

exports.getSingleEvent = (req, res) => {
  res.status(201).json({
    status: "Successful",
    data: req.param.eventId,
  });
};

exports.editSingleEvent = (req, res) => {
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

exports.getAllEvent = (req, res) => {
  res.status(201).json({
    status: "Successful",
    data: [],
  });
};
