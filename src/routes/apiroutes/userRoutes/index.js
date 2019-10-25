const router = require('express').Router();
const userController = require('./../../../controllers/userController');


// /api/user
router.route('/')
    .get(userController.checkUser)
    .post(userController.createUser)

module.exports = router;