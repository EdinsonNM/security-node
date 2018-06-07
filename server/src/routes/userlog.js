const Router = require ("express").Router;
const UserlogController = require('../controllers/userlog');
const router = Router();
const passport = require('passport');

// define the home page route
router.get('/application/:app', passport.authenticate('jwt', {session: false}), UserlogController.getAll);
router.post('/:app/:token/:user', UserlogController.post);

module.exports = router;
