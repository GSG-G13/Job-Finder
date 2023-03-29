const path = require('path');

const homePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

const searchJob = (req, res) => {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '63a843f0a2msh9298bf05f642e1dp1e4f9bjsn7f6df17ae77a',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
    },
  };
  fetch('https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1', options)
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((error) => console.log(error));
};

module.exports = { homePage, searchJob };
