const router = require('express').Router();

const { homePage, getJobs } = require('../controllers/index');

router.get('/', homePage);

router.get('/search', getJobs);

module.exports = router;
