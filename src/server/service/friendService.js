'use strict';
const mongoose = require('mongoose');
const User = mongoose.model('user');

exports.getList = function (params) {
    const promise = User.find({}).exec();
    return promise;
};