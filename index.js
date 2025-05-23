// index.js
const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => res.send('API is running'));

app.listen(PORT, () => console.log(`API running on port ${PORT}`));