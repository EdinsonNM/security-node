const Router = require ("express").Router;
const UserlogController = require('../controllers/userlog');
const router = Router();
const passport = require('passport');

// define the home page route
router.get('/:cnn', passport.authenticate('jwt', {session: false}), UserlogController.getAll);
router.post('/:token/login', UserlogController.post);

module.exports = router;
