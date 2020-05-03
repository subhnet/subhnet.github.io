var ghpages = require('gh-pages');

ghpages.publish('dist', {
    branch: 'master',
    repo: 'https://github.com/subhset/subhset.github.io.git'
}, function (err) {
    console.log(err);
});