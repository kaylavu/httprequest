var https = require('https'); 

function getAndPrintHTMLChunks () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };
  
https.get(requestOptions, function(response) {

    //set encoding of received data to UTF-8
response.setEncoding('utf8'); 

response.on('data', function(data) {
    console.log(data + '\n' )
}); 

}); 
}

getAndPrintHTMLChunks();