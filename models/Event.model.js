const mongoose = require("mongoose");

const Attendee = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  certainty: {
    type: String,
    enum: ["Very Certain", "Very Likely", "Somehow", "Depends", "Not sure"],
    required: true,
  },
});

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      //   required: true,
    },
    category: Array,
    scheduledDate: {
      type: Date,
      required: true,
    },
    startTime: Number,
    duration: String,
    venue: {
      type: String,
      required: true,
    },
    participants: [Attendee],
    noOfParticipants: Number,
  },
  { timestamps: true },
);

module.exports = new mongoose.model("Event", EventSchema);
