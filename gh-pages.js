var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/gillisce/gillisce.github.io.git', // Update to point to your repository  
        user: {
            name: 'Chris Gillis', // update to use your name
            email: 'cgillis93@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)