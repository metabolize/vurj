#!/usr/bin/env node

var program = require('commander');
var versionedPublisher = require('./versioned-publisher');

program
    .version('1.0')
    .arguments('<version> <source> <baseUrl>')
    .option('-f, --force', 'Force the deploy even if the full-version release already exists')
    .action(function (version, source, baseUrl) {
        versionedPublisher.publishWithVersion(version, source, baseUrl, program.force, function (err) {
            if (err) {
                console.error(err.message);
                console.error('ERROR! Aborting deploy...');
                process.exit(1);
            }
        });
    })
    .parse(process.argv);
