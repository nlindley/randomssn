var Lab = require('lab');
var lab = exports.lab = Lab.script();
var expect = require('chai').expect;

var SSN = require('../ssn');

lab.experiment('SSN', function() {
  lab.experiment('::generate', function() {
    lab.test('Should match the format ###-##-####', function(done) {
      expect(SSN.generate()).to.match(/^\d{3}-\d{2}-\d{4}$/);
      done();
    });
  });
});
