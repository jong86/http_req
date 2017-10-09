var https = require("https");

function getAndPrintHTML(options) {
  
  https.get(options, function (response) {
    
    var buffer = "";
    
    response.setEncoding("utf8");
    
    response.on("data", function(data) {
      buffer += data;
    });
    
    response.on("end", function() {
      console.log("ALL DATA:\n", buffer);
    });
    
  });
  
}

var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step2.html"
};

getAndPrintHTML(requestOptions);
