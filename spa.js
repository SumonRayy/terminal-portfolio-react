const fs = require("fs");

fs.appendFile("build/_redirects", "/*    /index.html   200", function(err) {
  if (err) throw err;
  console.log("Saved!");
});