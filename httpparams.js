var https = require('https'); 

function getAndPrintHTML (options) {
     /* Add your code here */
  https.get(options, function(response) {
      
    //set encoding of received data to UTF-8
      response.setEncoding('utf8');     
      var dataArr = "";  

      response.on('data', function(data){
          dataArr += data; 
      })

      response.on('end', function() {
          console.log(dataArr);
      });

  });
  }

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
  };
  

  getAndPrintHTML(requestOptions);