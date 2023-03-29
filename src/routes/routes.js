const router = require('express').Router();

const { homePage, searchJob, formData } = require('../controllers/index');

router.get('/', homePage);

router.get('/search', searchJob);

router.post('/search', formData);

module.exports = router;
