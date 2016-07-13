var c = require('rho-contracts-fork');
var semver = require('semver');

var cc = module.exports = {};

cc.SemanticVersion = c.pred(semver.valid).rename('SemanticVersion');

cc.callback = require('rho-cc-node-style-callback').withDefaultError(c.error);

cc.s3uri = require('rho-cc-s3-uri');
