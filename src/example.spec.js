require('should');

var example = require('./example');

describe('Example tests', function () {

    it('should run a basic test', function () {
        example.plus(1, 1).should.equal(2);
    });
});
