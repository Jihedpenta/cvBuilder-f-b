const express = require('express');
const router = express.Router();
const usersController = require('../../controllers/usersController');
const ROLES_LIST = require('../../config/roles_list');
const verifyRoles = require('../../middleware/verifyRoles');
const verifyJWT = require('../../middleware/verifyJWT');

router.use(verifyJWT)
router.route('/')
    .get(verifyRoles(ROLES_LIST.Admin), usersController.getAllUsers)
    .put(verifyRoles(ROLES_LIST.Admin), usersController.editUser);
router.route('/:id')
    .get(verifyRoles(ROLES_LIST.Admin), usersController.getUser)
    .delete(verifyRoles(ROLES_LIST.Admin), usersController.deleteUser);

module.exports = router;