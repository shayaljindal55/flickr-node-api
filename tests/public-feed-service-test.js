var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../index');
var should = chai.should();

chai.use(chaiHttp);

describe('Unit test for fetching images from flickr api based on serach input param as query string - Node', () => {
  /*
  * Test the /GET /getFlickrPictures (positive scenario)
  */
  it('it should /GET /getFlickrPictures successfully - status code 200', (done) => {
    chai.request(server)
      .get('/publicFeed/getFlickrPictures')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

    /*
  * Test the /GET /getFlickrPictures (negative scenario)
  */
 it('it should /GET /getFlickrPictures failed - status code 404', (done) => {
    chai.request(server)
      .get('/publicFeed/getFlickrPictures_invalid')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });

      /*
  * Test the /GET /getFlickrPictures (positive scenario with valid query string)
  */
 it('it should /GET /getFlickrPictures successfully - status code 200', (done) => {
  chai.request(server)
    .get('/publicFeed/getFlickrPictures')
    .query({ serachInput: 'Singapore', count: 50 })
    .end((err, res) => {
      res.should.have.status(200);
      done();
    });
});

          /*
  * Test the /GET /getFlickrPictures (negative scenario with invalid query string)
  */
 it('it should /GET /getFlickrPictures successfully - status code 200', (done) => {
  chai.request(server)
    .get('/publicFeed/getFlickrPictures')
    .query({ serachInput: 'nyc', count: 'ABCD' })
    .end((err, res) => {
      res.should.have.status(200); // flickr API does not verify datatype of the parameters in query string, hence getting 200 OK with invalid 'count'
      done();
    });
});
});