# vurj

A simple command line utility that allows pushing releases to S3 buckets with semantic versioning using `urj`.

Usage
-----

```js
vurj [-f] <version> <source> <base-url>
```

Where `version` is a semver, `source` is the source to publish, and `base-url` is the S3 path you want the generated keys to be prefixed by. vurj will publish the release to a major-version folder and a full-version folder, e.g. `vurj 1.2.3 s3://foo/bar` will publish `source` to `s3://foo/bar/1` AND to `s3://foo/bar/1.2.3`. If the major-version path already exists, **it will be overwritten**. By default, the full-version path will not be overwritten if a release already is present there, unless the `-f` or `--force` option is used.

Installation
------------

```console
npm install vurj
```

Contribute
----------

- Issue Tracker: github.com/bodylabs/vurj/issues
- Source Code: github.com/bodylabs/vurj

Pull requests welcome!


Support
-------

If you are having issues, please let us know.


License
-------

The project is licensed under the two-clause BSD license.
