
const Router = require ("express").Router;
const Connection = require('../controllers/connection');
const router = Router();

// define the home page route
router.get('/application/:app',Connection.getAll);
router.get('/:id', Connection.get);
router.post('/', Connection.post);

module.exports = router;
