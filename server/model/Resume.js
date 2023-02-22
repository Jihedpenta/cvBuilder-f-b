const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
  industry: String,
  lang: String,
  pentaContact: {
    name: String,
    email: String,
    number: String,
  },
  data:{
    
  }
});

module.exports = mongoose.model("Resume", resumeSchema);
