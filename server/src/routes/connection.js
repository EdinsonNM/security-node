
const Router = require ("express").Router;
const Connection = require('../controllers/connection');
const router = Router();

// define the home page route
router.get('/application/:app',Connection.getAll);
router.get('/:id', Connection.get);
router.post('/', Connection.post);
router.put('/:id', Connection.put);
router.delete('/:id', Connection.delete);

module.exports = router;
