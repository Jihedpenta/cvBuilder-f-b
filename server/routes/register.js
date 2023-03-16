const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');
const ROLES_LIST = require('../config/roles_list');
const verifyRoles = require('../middleware/verifyRoles');
const verifyJWT = require('../middleware/verifyJWT');

router.use(verifyJWT)
router.route('/')
    .post(verifyRoles(ROLES_LIST.Admin),registerController.handleNewUser);//verifyRoles(ROLES_LIST.Admin)

module.exports = router;