//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/wedev-angular'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname,'/dist/wedev-angular/index.html'));
});

// Start the app by listening on the default Heroku port
var server = app.listen(process.env.PORT || 4005, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});
