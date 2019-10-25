const router = require('express').Router();
const eventControllers = require('./../../../controllers/eventControllers');


// /api/event
router.route('/')
    .get(eventControllers.getEvents)
    .post(eventControllers.createEvent)
    .delete(eventControllers.deleteEvents)

module.exports = router;