var http = require("http");
var fs = require("fs");
var str=fs.readFileSync('data.json');
function onRequest(requests, response){
  console.log("Request received.");
  response.writeHead(200,{"Content-Type":'text/plain','charset':'utf-8','Access-Control-Allow-Origin':'*','Access-Control-Allow-Methods':'PUT,POST,GET,DELETE,OPTIONS'});
  response.write(str);
  response.end();
}
var server = http.createServer(onRequest);
server.listen(8080);
 
console.log("Server has started.port on 8080\n");