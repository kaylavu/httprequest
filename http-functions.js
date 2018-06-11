

module.exports = function getHTML (options, callback) {
    var https = require('https'); 
    /* Your code here */
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
};

