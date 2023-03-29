const getHello = (req, res) => {
  res.send('<h1> World</h1>');
};
const searchJob = (req, res) => {
  const arr = [{ id: 1 }, { id: 2 }];
  res.send(arr);
};
module.exports = { getHello, searchJob };
