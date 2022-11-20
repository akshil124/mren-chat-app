const mongoose = require("mongoose")

const chatmodel = mongoose.Schema({
    chatname: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    latestMessages: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Massage"
    },
    groupAdmin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true }
);
const Chat = mongoose.model("chatModel", chatmodel)
module.exports = Chat;