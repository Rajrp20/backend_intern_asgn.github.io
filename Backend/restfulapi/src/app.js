const express = require("express");
require("./db/conn");

const User = require("./models/users");
const Meeting = require("./models/meetings");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());

//add new users

app.post("/users/new", async (req, res) => {
  try {
    const user = new User(req.body);

    const createUser = await user.save();
    res.status(201).send(createUser);
  } catch (e) {
    res.status(400).send(e);
  }
});

//read the data of registered students

app.get("/users/all", async (req, res) => {
  try {
    const UsersData = await User.find();
    res.send(UsersData);
  } catch (e) {
    res.send(e);
  }
});

// ADDITIONAL FEATURE

//get individual user data using id

app.get("/users/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const userData = await User.findById(_id);
    console.log(userData);
    if (!userData) {
      return res.status(404).send();
    } else {
      res.send(userData);
    }
  } catch (e) {
    res.status(500).send(e);
  }
});

//setup a meeting

app.post("/meetings/new", async (req, res) => {
    try {
      const meeting = new Meeting(req.body);
      const createMeeting = await meeting.save();
      res.status(201).send(createMeeting);
    } catch (e) {
      res.status(400).send(e);
    }
  });

//read the data of meetings

app.get("/meetings/all", async (req, res) => {
    try {
      const MeetingData = await Meeting.find();
      res.send(MeetingData);
    } catch (e) {
      res.send(e);
    }
  });

// ADDITIONAL FEATURE

//get meeting data using id

app.get("/meetings/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const meetingData = await Meeting.findById(_id);
      console.log(meetingData);
      if (!meetingData) {
        return res.status(404).send();
      } else {
        res.send(meetingData);
      }
    } catch (e) {
      res.status(500).send(e);
    }
  });

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
});
