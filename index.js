const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./App/router/router');

// Views EJS
app.set('view engine', 'ejs');
app.set('views', './App/views');

app.use(express.static('./App/assets'));

// Autorisation d'exploitation depuis toute URL
app.use(cors({
  origin: "*"
}));
// BodyParser afin de parser les données issus de formulaires
app.use(express.json())

app.get('/', (req, res) => {
  res.render('index')
})
app.use(router);
app.listen(process.env.PORT, console.log(`App open on Port:${process.env.PORT}`));