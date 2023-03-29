const router = require('express').Router();

const { getHello, searchJob } = require('../controllers/index');

router.get('/', getHello);
router.get('/search', searchJob);

module.exports = router;
