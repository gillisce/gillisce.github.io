import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/gillisce/gillisce.github.io.git', // Update to point to your repository
  user: {
   name: 'CGillis', // update to use your name
   email: 'cgillis93@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);