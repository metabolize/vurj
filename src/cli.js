#!/usr/bin/env node

var program = require('commander');
var versionedPublisher = require('./versioned-publisher');

program
    .version('1.0')
    .arguments('<version> <source> <baseUrl>')
    .option('-f, --force', 'Force the publish even if the full-version release already exists')
    .action(function (version, source, baseUrl) {
        versionedPublisher.publishWithVersion(version, source, baseUrl, Boolean(program.force), function (err) {
            if (err) {
                console.error(err.message);
                console.error('ERROR! Some publishes failed to complete. Check the log for more info.');
                process.exit(1);
            } else {
                console.log('SUCCESS!');
            }
        });
    })
    .parse(process.argv);
