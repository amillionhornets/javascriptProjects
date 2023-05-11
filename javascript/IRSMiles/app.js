
var http = require('http'),
    fs = require('fs');
fs.readFile('./test.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000);
});
// fs.readFile('./mainapp.js', function (err, js) {
//     if (err) {
//         throw err; 
//     }else{
//     response.writeHeader(200, {"Content-Type": "text/javascript"});  
//         response.write(js);  
//         response.end();  }
// });