var expect = require('chai').expect
var supertest = require('supertest')
var server = require('../app')
var api = supertest(server)

describe('APP Test', function () {
  it('should say hello in / path', function(done) {
    api.get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        expect(res.text).to.be.equal('hello')
        done()
		})
	})

  it('should say hi in /hi path', function(done) {
    api.get('/hi')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        expect(res.text).to.be.equal('hi')
        done()
		})
	})

})



