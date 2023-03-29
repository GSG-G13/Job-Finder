const express = require('express');

const app = express();

require('dotenv').config();

const router = require('./routes/routes');

app.use(router);

const PORT = process.env.PORT_NUMBER || 3000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});