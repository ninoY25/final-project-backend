const mongoose = require('mongoose');
const messageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    from_username: String,
    to_username: String,
    text: String
}, {
    collection: 'chat'
});

module.exports = mongoose.model('chat', messageSchema);