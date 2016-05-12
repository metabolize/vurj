// Note that many of our JS modules export a single constructor or factory
// function. The pattern below is an example. There's no need to follow it to
// the letter when creating a package.

module.exports = {
    plus: require('./src/example').plus,
};
