import {
    autheticate,
    addUser,
    fetchUser,
    addSteamApp,
    fetchSteamApp,
    addGame,
    editGame,
    fetchGame,
    addCarousel,
    fetchCarousel,
    addGameDetail,
    fetchGameDetail,
    addReview,
    fetchReview
} from '../controller/controller.js';

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
        .put(editGame);

    app.route('/game/detail/:_id')
        .get(fetchGameDetail);

    app.route('/game/detail')
        .post(addGameDetail);

    app.route('/carousel')
        .post(addCarousel)
        .get(fetchCarousel);

    app.route('/game/:_id/review')
        .post(addReview)
        .get(fetchReview)
};