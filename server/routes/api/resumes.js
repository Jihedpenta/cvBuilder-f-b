const express = require('express');
const router = express.Router();
const resumesController = require('../../controllers/resumesController');

router.route('/')
    .get(resumesController.getAllResumes)
    .post(resumesController.createResume);


router.route('/author/:id')
    .get(resumesController.getResumesByUserId);    

// router.route('/:id')
//     .get(verifyRoles(ROLES_LIST.Admin), usersController.getUser);

module.exports = router;