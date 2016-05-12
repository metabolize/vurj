#!/usr/bin/env node

var program = require('commander');
var versionedDeployer = require('./versioned-deployer');

program
    .version('1.0')
    .arguments('<version> <source> <baseUrl>')
    .option('-f, --force', 'Force the deploy even if the full-version release already exists')
    .action(function (version, source, baseUrl) {
        versionedDeployer.deployWithVersion(version, source, baseUrl, program.force, function (err) {
            if (err) {
                console.error(err.message);
                console.error('ERROR! Aborting deploy...')
                process.exit(1);
            }
        });
    })
    .parse(process.argv);
