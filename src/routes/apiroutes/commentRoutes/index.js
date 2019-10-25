const router = require('express').Router();
const commentControllers = require('./../../../controllers/commentControllers');


// /api/user
router.route('/')
    .get(commentControllers.checkUser)
    .post(commentControllers.createUser)

module.exports = router;