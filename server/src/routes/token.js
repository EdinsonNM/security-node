
const Router = require ("express").Router;
const Token = require('../controllers/token');
const jwt = require('jsonwebtoken');

const router = Router();

router.post('/',Token.post);
router.get('/application/:app', Token.getLastToken);

module.exports = router;
