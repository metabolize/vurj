var async = require('async');
var semver = require('semver');
var Publisher = require('urj').Publisher;
var url = require('url');

var publishWithVersion = function (version, source, baseUrl, noClobber, doneCallback) {
    var majorVersion = semver.major(version);

    var fullVersionUrl = url.resolve(baseUrl, version);
    var majorVersionUrl = url.resolve(baseUrl, majorVersion.toString());
    console.log('Publishing ' + source + '...');

    async.series([
            function (callback) {
                console.log('Publishing new version to ' + fullVersionUrl + "...");
                var publisher = new Publisher({ noClobber: noClobber });
                publisher.publish(source, fullVersionUrl, callback);
            },
            function (callback) {
                console.log('Setting as latest of major version ' + majorVersion + ', publishing to ' + majorVersionUrl + ".");
                // Always clobber the major version if setting the full version above succeeded
                var publisher = new Publisher({ noClobber: false });
                publisher.publish(source, majorVersionUrl, callback);
            },
        ],
        doneCallback);
};

module.exports = {
    publishWithVersion: publishWithVersion,
};
