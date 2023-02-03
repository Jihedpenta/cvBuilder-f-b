const express = require('express');
const router = express.Router();
const createAdminController = require('../controllers/createAdminController');

router.post('/', createAdminController.handleCreateAdmin);

module.exports = router;