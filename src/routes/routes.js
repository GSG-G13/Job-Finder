const router = require('express').Router();

const {
  homePage, getJobs, error404, error500,
} = require('../controllers/index');

router.get('/', homePage);

router.get('/search', getJobs);

router.use(error404);
router.use(error500);

module.exports = router;
