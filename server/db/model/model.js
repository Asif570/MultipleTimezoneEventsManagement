const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  password: String,
  tittle: String,
  timezone: String,
  offset: Number,
  clocks: [
    {
      clock_id: String,
      clock_tittle: String,
      clock_offset: Number,
      clock_timezone: String,
    },
  ],
  events: [
    {
      clock_id: String,
      event_id: String,
      event_tittle: String,
      event_description: String,
      date: String,
    },
  ],
});
const User = mongoose.model("User", userSchema);
module.exports = User;
