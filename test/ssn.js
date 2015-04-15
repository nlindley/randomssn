var expect = require('chai').expect;
var sinon = require('sinon');
var SSN = require('../ssn');

describe('SSN', function() {
  describe('::generate', function() {
    it('Should match the format ###-##-####', function() {
      expect(SSN.generate()).to.match(/^\d{3}-\d{2}-\d{4}$/);
    });
  });
});
