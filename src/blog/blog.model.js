const mongoose = require("mongoose");

var schema = new mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        author: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

var blog = new mongoose.model("mublog", schema);
module.exports = blog;