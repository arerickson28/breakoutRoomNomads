const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pollSchema = new Schema({
    pollName: {
        type: String,
        required: true,
        trim: true,
    },
    pollOp: {
        type: Array,
        required: false,
    }
})

const Poll = mongoose.model("Poll", pollSchema);

module.exports = Poll;
