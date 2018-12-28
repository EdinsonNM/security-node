const Router = require ("express").Router;
const UserController = require('../controllers/user');
const router = Router();
const passport = require('passport');

router.post('/login', UserController.auth);
router.post('/setup', UserController.setup);
router.post('/', UserController.post);
router.get('/me', passport.authenticate('jwt', {session: false}), UserController.me);
router.post('/logout', passport.authenticate('jwt', {session: false}), UserController.logout);

module.exports =  router;
