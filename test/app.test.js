var expect = require('chai').expect
var supertest = require('supertest')
var server = require('../app')
var api = supertest(server)

describe('APP Test', function () {
  it('should hello in / path', function(done) {
    api.get('/')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        expect(res.text).to.be.equal('hello')
        done()
		})
	})

  it('should hi docker in /docker path', function(done) {
    api.get('/docker')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        expect(res.text).to.be.equal('hi docker')
        done()
		})
	})

  it('should hi in /docker path', function(done) {
    api.get('/hi')
      .expect(200)
      .end(function (err, res) {
        if (err) return done(err)
        expect(res.text).to.be.equal('hi')
        done()
		})
	})

})



