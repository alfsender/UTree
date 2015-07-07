var mongoose = require("mongoose");

var CommentSchema = new mongoose.Schema({
    name: String,
    note: String,
    createdDt: {type: Date, default: Date.now()}
});

module.exports = mongoose.model("CommentModel", CommentSchema);