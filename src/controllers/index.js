const { homePage, getJobs } = require('./main');
const { error404, error500 } = require('./errors');

module.exports = {
  homePage, getJobs, error404, error500,
};
