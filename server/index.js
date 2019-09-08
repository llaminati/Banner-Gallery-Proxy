const express = require('express');

const app = express();
const port = 3010;

app.use(express.static('public'));
app.use('/:listing', express.static('public'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));