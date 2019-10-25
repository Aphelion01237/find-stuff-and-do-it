const router = require('express').Router();

const userRoutes = require('./userRoutes');
const eventRoutes = require('./eventRoutes')
const commentRoutes = require('./commentRoutes');

// /api  prepended to every route declared in here




// /api/user
router.use('/user', userRoutes)

// /api/events
router.use('/events', eventRoutes);

// /api/comment
router.use('/comments', commentRoutes);

module.exports = router;
