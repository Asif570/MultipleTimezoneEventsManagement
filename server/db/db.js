const mongoose = require("mongoose");

const DB = (URI) => {
  mongoose
    .connect(URI)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((error) => console.log(error));
};
module.exports = DB;
