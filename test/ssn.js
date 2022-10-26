const Lab = require('@hapi/lab');
const lab = exports.lab = Lab.script();
const expect = require('chai').expect;
const sinon = require('sinon');

const SSN = require('../ssn');

lab.experiment('SSN', function() {
  lab.experiment('::generate', function() {
    lab.experiment('666', function() {
      lab.beforeEach(function() {
        sinon.stub(Math, 'random');
        Math.random.onCall(0).returns(0.7400);
        Math.random.onCall(1).returns(0.5555);
        Math.random.onCall(2).returns(0.4444);
        Math.random.onCall(3).returns(0.3333);
      });

      lab.afterEach(function() {
        Math.random.restore();
      });

      lab.test('Should not match the format 666-##-####', function() {
        expect(SSN.generate()).to.equal('499-44-3333');
      });
    });

    lab.experiment('9##-##-####', function() {
      lab.beforeEach(function() {
        sinon.stub(Math, 'random');
        Math.random.onCall(0).returns(0.9999);
        Math.random.onCall(1).returns(0.5555);
        Math.random.onCall(2).returns(0.4444);
      });

      lab.afterEach(function() {
        Math.random.restore();
      });

      lab.test('Should not start with a 9', function() {
        expect(SSN.generate()).to.equal('899-55-4444');
      });
    });

    lab.experiment('000-##-####', function() {
      lab.beforeEach(function() {
        sinon.stub(Math, 'random');
        Math.random.onCall(0).returns(0.0000);
        Math.random.onCall(1).returns(0.5555);
        Math.random.onCall(2).returns(0.4444);
        Math.random.onCall(3).returns(0.3333);
      });

      lab.afterEach(function() {
        Math.random.restore();
      });

      lab.test('Should not have all 0s in first component', function() {
        expect(SSN.generate()).to.equal('499-44-3333');
      });
    });

    lab.experiment('###-00-####', function() {
      lab.beforeEach(function() {
        sinon.stub(Math, 'random');
        Math.random.onCall(0).returns(0.5555);
        Math.random.onCall(1).returns(0.0000);
        Math.random.onCall(2).returns(0.4444);
        Math.random.onCall(3).returns(0.3333);
      });

      lab.afterEach(function() {
        Math.random.restore();
      });

      lab.test('Should not have all 0s in second component', function() {
        expect(SSN.generate()).to.equal('499-44-3333');
      });
    });

    lab.experiment('###-00-####', function() {
      lab.beforeEach(function() {
        sinon.stub(Math, 'random');
        Math.random.onCall(0).returns(0.5555);
        Math.random.onCall(1).returns(0.4444);
        Math.random.onCall(2).returns(0.0000);
        Math.random.onCall(3).returns(0.3333);
      });

      lab.afterEach(function() {
        Math.random.restore();
      });

      lab.test('Should not have all 0s in third component', function() {
        expect(SSN.generate()).to.equal('499-44-3333');
      });
    });

    lab.test('Should match the format ###-##-####', function() {
      expect(SSN.generate()).to.match(/^\d{3}-\d{2}-\d{4}$/);
    });
  });
});
