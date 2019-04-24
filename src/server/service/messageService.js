'use strict';
const mongoose = require('mongoose');
const Message = require('../model/message');

exports.getList = function (source_username,target_username) {
    const promise = Message.find({ $or: [ { from_username: source_username , to_username: target_username },  { from_username: target_username , to_username: target_username }] }).exec();
    return promise;
};

exports.save = function (message) {
    const new_message = new Message(message);
    new_message._id =new mongoose.Types.ObjectId();
    const promise = new_message.save();
    return promise;
};
