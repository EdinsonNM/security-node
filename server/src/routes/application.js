
const Router = require ("express").Router;
const {LocalApplication} = require('../models/index');
const ApplicationController = require('../controllers/application');
const router = Router();

router.get('/:id', ApplicationController.get);
router.get('/', ApplicationController.getAll);
router.post('/',ApplicationController.post);
router.delete('/',ApplicationController.delete);
router.post('/:app/auth/:token',ApplicationController.getAuth);

module.exports =  router;
