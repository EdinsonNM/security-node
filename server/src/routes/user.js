const Router = require ("express").Router;
const UserController = require('../controllers/user');
const router = Router();

router.post('/login', UserController.auth);
router.post('/setup', UserController.setup);

module.exports =  router;
