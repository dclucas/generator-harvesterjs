'use strict';

var chai = require('chai');
chai.should();
chai.use(require('chai-http'));
chai.use(require('chai-things'));

var Promise = require('bluebird');
var cfg = require('../app/config');

var app = require('../app/api');

if (!global.Promise) {
  chai.request.addPromises(Promise.Promise);
}

before(function() {
    app.listen(cfg.port);
});

var validPersonBody = { 'people': [{ 'name': 'John Doe', 'email': 'john.doe@email.com' }]};

function checkBody(response) {
    /*eslint no-unused-expressions:0*/
    response.should.exist;
    response.body.should.exist;
    response.body.people[0].id.should.exist;
    var newId = response.body.people[0].id;
    var expected = JSON.parse(JSON.stringify(validPersonBody));
    expected.people[0].id = newId;
    response.body.should.deep.equal(expected);
    return newId;
}

describe('Given a valid person resource', function(){
    describe('When I post it to the people/ endpoint', function(){
        var responsePromise;
        var response;
        var newId;
        it('Then I receive a 201 status code', function() {
            responsePromise = chai.request(app.router)
                .post('/people')
                .set('Content-type', 'application/json')
                .send(validPersonBody)
                .then(function(res) {
                    response = res;
                    res.should.have.status(201);
                    return res;
                });

            return responsePromise;
        });

        it('And the response contains the newly created resource', function() {
            return responsePromise.then(function(res) {
                newId = checkBody(response);
                return res;
            });
        });

        it('And I can now get the newly created resource', function() {
            return responsePromise.then(function() {
                return chai.request(app.router)
                    .get('/people/' + newId)
                    .set('Content-type', 'application/json')
                    .then(function(res) {
                        res.should.have.status(200);
                        checkBody(res);
                        return res;
                    });
            });
        });
    });
});
