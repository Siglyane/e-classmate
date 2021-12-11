const mongoose = require("mongoose");


const ClassroomSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required:true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  url: {
    type: String,
    required: true
  },
  maxParticipants: {
    type: Number,
    min: 2,
    max: 100, // based on Google Meet and Zoom max participants
    default: 100
  },
  languages: {
    type: String,
    enum: ["c", "java", "python", "javascript", "lua", "ruby", "c++", "c#"],
    required:true
  },
  subject: {
    type: Array,
    required: true
  },
  usersLoggedIn: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }]

}, {timestamps: true})

const Classroom = mongoose.model("Classroom", ClassroomSchema);

module.exports = Classroom