const express = require('express');

const app = express();

const path = require('path');

require('dotenv').config();

const router = require('./routes/routes');

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(router);

const PORT = process.env.PORT_NUMBER || 3000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
