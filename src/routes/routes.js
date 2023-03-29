const router = require('express').Router();

const { homePage, searchJob } = require('../controllers/index');

router.get('/', homePage);

router.post('/search', searchJob);

module.exports = router;
