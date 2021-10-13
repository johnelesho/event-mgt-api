const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: string,
  certainty: {
    type: String,
    enum: ["Very Certain", "Very Likely", "Somehow", "Depends", "Not sure"],
    required: true,
  },
});

module.exports = new mongoose.model("User", UserSchema);
