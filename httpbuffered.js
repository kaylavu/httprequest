var https = require('https'); 

function getAndPrintHTML () {

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step2.html'
    };
  
    /* Add your code here */
  https.get(requestOptions, function(response) {
      
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

  getAndPrintHTML();