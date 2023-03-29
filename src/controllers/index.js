const path = require('path');

const homePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

const searchJob = (req, res) => {
  const arr = [{ id: 1 }, { id: 2 }];
  res.send(arr);
};

const formData = (req, res, next) => {
  const { title } = req.body;
  const { location } = req.body;

  console.log(title, 'TITLE');
  console.log(location, 'LOCATION');
  next();
};

module.exports = { homePage, searchJob, formData };
