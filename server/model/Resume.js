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
    },
 
  summary: String,
    educations: [
      {
        startDate: String,
        endDate: String,
        university: String,
        diploma: String
      }
    ],
    certifications: [
      {
        date: String,
        title: String,
        subtitle: String
      }
    ],
    experiences: [
      {
        startDate: String,
        endDate: String,
        jobTitle: String,
        company: String,
        location: String,
        description: String
      }
    ],
    projects: [
      {
        title: String,
        location: String,
        date: String,
        company: String,
        client: String,
        description: String
      }
    ],
    skills: [String],
    tools: [String],
    langs: [
      {
        lang: String,
        level: String,
      }
    ],
  },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true }

});

module.exports = mongoose.model("Resume", resumeSchema);
