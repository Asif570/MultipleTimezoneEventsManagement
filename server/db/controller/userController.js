const User = require("../model/model");
// Login controller here
//####################################
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const login = async (req, res) => {
  try {
    const result = await User.findOne({ name: req.body.name });
    if (result) {
      if (result.password === req.body.password) {
        res.status(200).json({ message: "User Found", result: result });
      } else {
        res.status(405).json({ message: "Invalid Name or Password" });
      }
    } else {
      res.status(405).json({ message: "User Not Exsist" });
    }
  } catch (error) {}
};
// All create controller here
//####################################
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const registeruser = async (req, res) => {
  const data = new User({
    name: req.body.name,
    password: req.body.password,
    tittle: req.body.tittle,
    timezone: req.body.timezone,
    offset: req.body.offset,
  });
  data.save(async (error) => {
    if (error) {
      res.status(501).json({ message: "Not Save" });
    } else {
      const result = await User.find({ name: req.body.name });
      res.status(201).json({ message: " Saved", result: result });
    }
  });
};
const createClock = async (req, res) => {
  try {
    await User.update(
      {
        _id: req.params.id,
      },
      {
        $push: {
          clocks: {
            clock_id: req.body.id,
            clock_tittle: req.body.tittle,
            clock_timezone: req.body.timezone,
            clock_offset: req.body.offset,
          },
        },
      }
    );
    const user = await User.findOne({ _id: req.params.id });
    res.status(202).json({ message: "Done", result: user.clocks });
  } catch (error) {
    res.status(402).json({ message: "Wrong" });
  }
};
const createEvent = async (req, res) => {
  try {
    await User.update(
      {
        _id: req.params.id,
      },
      {
        $push: {
          events: {
            clock_id: req.body.clockId,
            event_tittle: req.body.tittle,
            event_description: req.body.description,
            date: req.body.date,
          },
        },
      }
    );
    const user = await User.findOne({ _id: req.params.id });
    res.status(202).json({ message: "Done", result: user.events });
  } catch (error) {
    res.status(402).json({ message: "Wrong" });
  }
};
// All Delete controller here
//####################################
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const deleteClock = async (req, res) => {
  try {
    await User.update(
      {
        _id: req.query.uid,
      },
      {
        $pull: {
          clocks: {
            clock_id: req.query.cid,
          },
        },
      }
    );
    const user = await User.findOne({ _id: req.query.uid });
    res.status(202).json({ message: "Deleted", result: user.clocks });
  } catch (error) {
    res.status(402).json({ message: "Wrong" });
  }
};

const deleteEvent = async (req, res) => {
  try {
    await User.update(
      {
        _id: req.query.uid,
      },
      {
        $pull: {
          events: {
            clock_id: req.query.eid,
          },
        },
      }
    );
    const user = await User.findOne({ _id: req.query.uid });
    res.status(202).json({ message: "Deleted", result: user.events });
  } catch (error) {
    res.status(402).json({ message: "Wrong" });
  }
};
// All Update controller here
//####################################
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const updateRegisteruser = async (req, res) => {
  try {
    await User.update(
      {
        _id: req.params.id,
      },
      {
        $set: {
          tittle: req.body.tittle,
          name: req.body.name,
          password: req.body.password,
        },
      }
    );
    const user = await User.findOne({ _id: req.params.id });
    res.status(202).json({ message: "Updated", result: user });
  } catch (error) {
    res.status(402).json({ message: "Wrong" });
  }
};
const updateClock = async (req, res) => {
  try {
    await User.update(
      { "clocks.clock_id": req.query.cid },
      {
        $set: {
          "clocks.$.clock_tittle": req.body.tittle,
          "clocks.$.clock_timezone": req.body.timezone,
          "clocks.$.clock_offset": req.body.offset,
        },
      }
    );
    const result = await User.findOne({ _id: req.query.uid });
    res.status(202).json({ message: "Done", result: result.clocks });
  } catch (error) {
    res.status(401).json({ message: "Not Update , Something Went Wrong !!" });
  }
};
const updateEvent = async (req, res) => {
  try {
    await User.update(
      { "events._id": req.query.eid },
      {
        $set: {
          "events.$.event_tittle": req.body.tittle,
          "events.$.event_description": req.body.description,
          "events.$.date": req.body.date,
        },
      }
    );
    const result = await User.findOne({ _id: req.query.uid });
    res.status(202).json({ message: "Done", result: result.events });
  } catch (error) {
    res.status(401).json({ message: "Not Update , Something Went Wrong !!" });
  }
};
// module export here
//####################################
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
module.exports = {
  updateClock,
  registeruser,
  createClock,
  createEvent,
  deleteClock,
  deleteEvent,
  updateRegisteruser,
  updateClock,
  updateEvent,
  login,
};
