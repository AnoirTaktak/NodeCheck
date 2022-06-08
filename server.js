var http = require('http'); 

var server = http.createServer(function (req, res) {  
    if (req.url == '/') { 
        
        
        
        res.write('<html><body><p>This is home Page.</p></body></html>');
       
    
    }
    else if (req.url == "/student") {
        
    
        res.write('<html><body><p>This is student Page.</p></body></html>');
      
    
    }
    else if (req.url == "/admin") {
        
       
        res.write('<html><body><p>This is admin Page.</p></body></html>');
     
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(3000); 

console.log('Node.js web server at port 3000 is running..')