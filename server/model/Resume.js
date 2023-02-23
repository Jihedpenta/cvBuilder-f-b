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
  data: {
    header: {
      firstName: String,
      lastName: String,
      jobTitle: String,
      adress: {
        adressLine: String,
        postalCode: String,
        city: String,
        country: String
      },
      phoneNumber: String,
      email: String,
      nationality: String,
      birthdate: String,
      imageUrl: String
    }
  }
});

module.exports = mongoose.model("Resume", resumeSchema);
