var express = require("express");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");

var commentsRoute = require("./routes/commentRoute");
var indexRouter = require("./routes/indexRoute");

mongoose.connect("mongodb://localhost:27017/commet", function(err){
    if(err){
        console.log("Connection Error ", err);
    }else{
        console.log("Connection Successful");
    }
});

var app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/', indexRouter);
app.use('/comment', commentsRoute);

app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'jade');

app.use(function(err, req, res, next){
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error:{}
    })

});

// Run The App
app.listen(3000);