// import app from '../index.js';
import dotenv from 'dotenv';
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js'

// configuration
chai.use(chaiHttp);
chai.should();
dotenv.config()

// tests start here
describe('Tickets', function () {
    describe('Fetch all tickets - will not test if there is no dotenv file', function () {

        it('should return a json', function (done) {

            chai.request(app)
                .get('/api/tickets')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                })
        });
    });
});

describe('User', function () {
    describe('Fetch single user - will not test if there is no dotenv file', function () {
        it('should return a json', function (done) {


            chai.request(app)
                .get('/api/user?id=1902292561204')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                })
        });
    });

    describe('Fetch single user with wrong user id - will not test if there is no dotenv file', function () {
        it('should return a json', function (done) {
            chai.request(app)
                .get('/api/user?id=1213')
                .end(function (err, res) {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    if (process.env.EMAIL === undefined || process.env.ZENDESK_TOKEN === undefined) {
                        res.body.error.should.equal("Couldn\'t authenticate you");
                    } else {
                        res.body.error.should.equal("RecordNotFound");
                    }
                    done();
                })
        });
    });
});

