const express = require('express');
const router = express.Router();
const resumesController = require('../../controllers/resumesController');

const verifyJWT = require('../../middleware/verifyJWT');

router.use(verifyJWT)
router.route('/')
    .get(resumesController.getAllResumes)
    .post(resumesController.createResume);

router.route('/:id')
    .get(resumesController.getResumeById);

router.route('/author/:id')
    .get(resumesController.getResumesByUserId);

router.route('/:id')
    .put(resumesController.updateResume);    

// router.route('/:id') 
//     .get(verifyRoles(ROLES_LIST.Admin), usersController.getUser);

module.exports = router;