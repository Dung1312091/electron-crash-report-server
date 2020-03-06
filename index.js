const express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var upload = multer({ dest: "uploads/" });
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get("/", function(req, res) {
  res.send("Hello World");
});
app.post(
  "/crash-report",
  upload.fields([{ name: "upload_file_minidump", maxCount: 1 }]),
  function(req, res) {
    console.log("body=======>", req);
  }
);

app.listen(3001);
