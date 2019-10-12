const path = require("path");
const express = require("express");

const app = express();
var cors = require('cors');
app.use(cors());

require('dotenv').config();

app.get("/", (req, res) => {
  res.status(200).send("/");
});
//to support JSON-encoded bodies
app.use(express.json());
//to support URL-encoded bodies
app.use(express.urlencoded());
var publicFeedService = require('./services/public-feed-service');
app.use('/publicFeed', publicFeedService);

app.listen(process.env.PORT, () => {
});

module.exports = app;
