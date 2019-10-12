var fs = require('fs');
var express = require('express');
var router = express.Router();
let xmlParser = require('xml2json-light');
var ws_url = process.env.WS_URL;
var api_key = process.env.API_KEY;
var request = require('request');

// get flickr images using flick endpoint. serach input is passed as param
router.get('/getFlickrPictures', (req, res, next) => {
        request.get({
            url: ws_url + '?method=flickr.photos.search&api_key='+api_key+'&tags='+ req.query.searchInput+'&per_page=50&page=1&format=json&nojsoncallback=1'
        }, (err, resp, body) => {
            if (err) {
                next(err);
            }
            else {
            res.json(JSON.parse(resp.body));
            }
        });
});

module.exports = router;
