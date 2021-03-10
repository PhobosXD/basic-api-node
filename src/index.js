const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/User-route');
const app = express();
const port = 3030;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

userRoute(app);

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log('API escutando em 3030!'));