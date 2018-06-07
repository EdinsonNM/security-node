
const Router = require ("express").Router;
const {LocalApplication} = require('../models/index');
const ApplicationController = require('../controllers/application');
const passport = require('passport');
const router = Router();

router.get('/:id', passport.authenticate('jwt', {session: false}), ApplicationController.get);
router.get('/', passport.authenticate('jwt', {session: false}), ApplicationController.getAll);
router.post('/', passport.authenticate('jwt', {session: false}),ApplicationController.post);
router.delete('/', passport.authenticate('jwt', {session: false}),ApplicationController.delete);
router.post('/:app/auth/:token',ApplicationController.getAuth);

module.exports =  router;
