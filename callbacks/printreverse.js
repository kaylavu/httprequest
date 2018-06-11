var getHTML = require('./http-functions');

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
  };

  function printReverse (html) {
    var htmlReverse = html.split(" ").reverse().join(" ")
    console.log(htmlReverse);
    /* Write your code here! */
  
  }

  getHTML(requestOptions, printReverse);