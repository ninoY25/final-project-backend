import {
    autheticate,
    addUser,
    fetchUser,
    addSteamApp,
    fetchSteamApp,
    addGame,
    editGame,
    fetchGame,
    deleteGame,
    addCarousel,
    fetchCarousel,
    addGameDetail,
    fetchGameDetail,
    addReview,
    fetchReview,
    deleteReview,
    editReview
} from '../controller/controller.js';
const friendController = require('../controller/friendController');
const messageController = require('../controller/messageController');

export function routes(app) {

    app.route('/users/authenticate')
        // .get(list)
        .post(autheticate);

    app.route('/user')
        .post(addUser);

    app.route('/user/:_id')
        .get(fetchUser);

    app.route('/steamApp')
        .post(addSteamApp)
        .get(fetchSteamApp);

    app.route('/game')
        .post(addGame)
        .get(fetchGame);

    app.route('/game/:_id')
        .put(editGame)
        .delete(deleteGame);

    app.route('/game/detail/:_id')
        .get(fetchGameDetail);

    app.route('/game/detail')
        .post(addGameDetail);

    app.route('/carousel')
        .post(addCarousel)
        .get(fetchCarousel);

    app.route('/game/:_id/review')
        .post(addReview)
        .get(fetchReview);

    app.route('/game/:_id/review/:_reviewid')
        .delete(deleteReview)
        .put(editReview);


    app.route('/friend')
        .get(friendController.getFriendList) //create a user account

    app.route('/chat/:sourceUsername/:targetUserName')
        .get(messageController.getMessageListFromUser)
        .post(messageController.saveMessage)
};
