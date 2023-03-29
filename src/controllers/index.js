const path = require('path');

const homePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};
const searchJob = (req, res) => {
  const arr = [{ id: 1 }, { id: 2 }];
  res.send(arr);
};
module.exports = { homePage, searchJob };
