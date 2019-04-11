const fs = require('fs')
    , join = require('path').join
    , assert = require('chai').assert
    , readme = fs.readFileSync(join(__dirname, '../README.md')).toString()

describe('README.md', function() {
    describe('Technology list', function() {
        it(' - should be in alphabetic order', function() {
            let regex = new RegExp('^[ \t]*##[ \t]*(.*)$', 'gmi');
            let techs = readme.replace(regex, '## $1').match(regex);
            assert.deepEqual(techs, techs.slice(0).sort());
        });
    });
});