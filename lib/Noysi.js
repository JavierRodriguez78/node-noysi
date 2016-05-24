var http = require("https");


function Noysi(config){
  this.accessToken = config.accesToken;
  this.baseUrl = 'https://api.noysi.com';
}

Noysi.prototype.getAuthorize = function(next){
  var options = {
    "method": "PUT",
    "hostname": baseUrl,
    "port": null,
    "path": "/v1/authorize",
    "headers": {
      "authorization": "Bearer "+accessToken
    }
  };
  var req = http.request(options, function (res) {
    var chunks = [];
    res.on("data", function (chunk) {
      chunks.push(chunk);
    });
    res.on("end", function () {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
    });
  });
  req.end();
}

if (!(typeof exports ==='undefined')){
  exports.Noysi = Noysi;
}
