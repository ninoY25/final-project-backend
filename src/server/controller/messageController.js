const messageService = require('../service/messageService');
var Pusher = require('pusher');
var pusher = new Pusher({
    appId: '768535',
    key: 'fdb829e87822abe385c6',
    secret: 'd3199a4f34365d86179f',
    cluster: 'us2',
    encrypted: true
});

exports.getMessageListFromUser = function (req, res, next) {
    const target = req.params.targetUsername;
    messageService.getList(target).then(
        docs => {
            console.log(docs);
            if (docs) {
                res.status(200).json(docs);
            } else {
                res.status(404).json({
                    message: "no valid username"
                });
            }
        }
    ).catch(handleError(res));
};

exports.saveMessage = function (req, res, next) {
    const target = req.params.targetUsername;
    const new_message = Object.assign({}, req.body);
    new_message.to_username = target;

    messageService.save(new_message).then(
        result => {
            console.log(result);
            res.status(200).json(result._id);
            pusher.trigger('realtime-chat', 'updated', {
                from_username: new_message.from_username,
                to_username: new_message.to_username,
                text: new_message.text
            });
        }
    ).catch(handleError(res));
};




let handleError = (res) => {
    const error_callback = (err) => {
        if (err) {
            console.log(err);
            res.status(500).json({
                error: err
            });
        }
    }
    return error_callback;
};