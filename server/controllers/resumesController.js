const Resume = require("../model/Resume");
const User = require("../model/User");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: Storage,
}).single("data[header][imageFile]");

const getAllResumes = async (req, res) => {
  const resumes = await Resume.find();
  if (!resumes) return res.status(204).json({ message: "No users found" });
  res.json(resumes);
};

const createResume = async (req, res) => {
  upload(req, res, async (err) => {
    if (!err) {
      const { industry, data, lang, pentaContact, author } = req.body;
      if (req.file?.filename) {
        const fileExt = path.extname(req.file.filename).toLowerCase();

        data.header.imageUrl = req.file.filename;
        data.header.imageFile = {
          data: fs.readFileSync("uploads/" + req.file.filename),
          contentType: "image/" + fileExt.substring(1),
        };
      } else {
        console.log("theres not a file");
      }
      const resume = new Resume({ industry, data, lang, pentaContact, author });
      resume
        .save()
        .then((result) => {
          // Add the post to the user's posts array
          User.findById(author)
            .then((user) => {
              user.resumes.push(resume);
              return user.save();
            })
            .then((result) => {
              res.status(201).json({
                message: `Resume created successfully`,
                resume: resume,
                user: result,
              });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json({ error: err });
            });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: err });
        });
    } else {
      console.log(err);
    }
  });
};

const updateResume = async (req, res) => {
  upload(req, res, async (err) => {
    if (!err) {
      // if (!req?.params?.id) return res.status(400).json({ "message": 'Resume ID required' });

      // const resume = await Resume.findOne({ _id: req.params.id }).exec();

      // const { industry, data, lang, pentaContact, author } = req.body;

      // const name = data.header.firstName + ' ' + data.header.lastName
      if (req.file?.filename) {
        const fileExt = path.extname(req.file.filename).toLowerCase();

        req.body.data.header.imageUrl = req.file.filename;
        req.body.data.header.imageFile = {
          data: fs.readFileSync("uploads/" + req.file.filename),
          contentType: "image/" + fileExt.substring(1),
        };
      }
      try {
        const resume = await Resume.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true } // Return the updated document
        );
        if (!resume) {
          return res.status(404).send("Resume not found");
        }
        res.send(resume);
      } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
      }
      // const resume = new Resume({ industry, data, lang, pentaContact, author })
      // resume.save()
      //     .then(result => {
      //         // Add the post to the user's posts array
      //         User.findById(author)
      //             .then(user => {
      //                 user.resumes.push(resume);
      //                 return user.save();
      //             })
      //             .then(result => {
      //                 res.status(201).json({
      //                     message: `Resume for ${name} created successfully`,
      //                     resume: resume,
      //                     user: result
      //                 });
      //             })
      //             .catch(err => {
      //                 console.log(err);
      //                 res.status(500).json({ error: err });
      //             });
      //     })
      //     .catch(err => {
      //         console.log(err);
      //         res.status(500).json({ error: err });
      //     });
    } else {
      console.log(err);
    }
  });
};

const getResumesByUserId = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "User ID required" });
  Resume.find({ author: req.params.id })
    .populate("author")
    .exec()
    .then((resumes) => res.json(resumes))
    .catch((err) => console.log(err));
};

const getResumeById = async (req, res) => {
  if (!req?.params?.id)
    return res.status(400).json({ message: "Resume ID required" });
  const resume = await Resume.findOne({ _id: req.params.id }).exec();
  if (!resume) {
    return res
      .status(204)
      .json({ message: `Resume ID ${req.params.id} not found` });
  }
  res.json(resume);
};

module.exports = {
  getAllResumes,
  createResume,
  getResumesByUserId,
  getResumeById,
  updateResume
};
