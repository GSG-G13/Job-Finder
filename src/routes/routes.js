const router = require('express').Router();

const getHello = require('../controllers/index');

router.get('/', getHello);

module.exports = router;
