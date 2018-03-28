var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  project_name: {
    type: String
  },
  teamID: {
    type: Schema.Types.ObjectId,
    ref: "Team" 
  },
  task_name: {
    type: String
  },
  description: {
    type: String,
    default: ""
  },
  assigned: [
    {
      type: Schema.Types.ObjectId,
      ref: "User" 
    }
  ],
  comments: [
    {userID: {
      type: Schema.Types.ObjectId,
      ref: "User" 
    },
    text: {
      type: String
    },
    comment_date: { 
      type: String
    }},
  ],
  due_date: { 
    type: Date
  }
});

var Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
