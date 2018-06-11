var https = require('https'); 

function getHTML (options, callback) {

    /* Add your code here */
    https.get(options, function(response) {
      
        //set encoding of received data to UTF-8
          response.setEncoding('utf8');     
          var dataArr = "";  
    
          response.on('data', function(data){
              dataArr += data; 
          })
    
          response.on('end', function() {
              callback(dataArr);
          });
    
      });
  
  }

  function printHTML (html) {
    console.log(html);
  }

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
  };

  getHTML (requestOptions, printHTML)