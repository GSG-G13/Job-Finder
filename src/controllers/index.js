const path = require('path');

const homePage = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'index.html'));
};

const searchJob = (req, res) => {
  const { title } = req.body;
  const { location } = req.body;

  // const url = `https://jsearch.p.rapidapi.com/search?query=${title}&page=1&num_pages=1`;
  const url2 = 'https://jsearch.p.rapidapi.com/search?query=Python%20developer%20in%20Texas%2C%20USA&page=1&num_pages=1'
  
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1e4529541amshe14048ca9b323f2p1badfbjsnb3e2336b9718',
      'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
    }
  };
  fetch(url2, options)
    .then((result) => result.json())
    .then((result) => res.send(result))
    .catch((error) => console.log(error));
};

module.exports = { homePage, searchJob };
