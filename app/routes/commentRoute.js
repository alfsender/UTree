var express = require("express");
var router = express.Router();

var CommentModel = require("../model/CommentModel");

router.get('/', function(req, res, next){
    CommentModel.find(function(err, comments){
        if(err) return next(err);
        res.json(comments);
    });
});

router.post('/', function(req, res, next){
    CommentModel.create(req.body, function(err, comment){
        if(err) return next(err);
        res.json(comment);
    });
});

router.delete('/:id', function(req, res, next){
    console.log(" ---- > " + req.params.id);
    CommentModel.findOneAndRemove(req.params.id, function(err, comment){
        if(err) next();
        res.json(comment);
    });
});

module.exports = router;