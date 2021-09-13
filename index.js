const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./App/router/router');


// Autorisation d'exploitation depuis toute URL
app.use(cors({
  origin: "*"
}));

// BodyParser afin de parser les données issus de formulaires
app.use(express.json())


app.use(router);
app.listen(process.env.PORT, console.log(`App open on Port:${process.env.PORT}`));