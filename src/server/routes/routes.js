import {
    autheticate,
    addUser,
    fetchUser,
    addSteamApp,
    fetchSteamApp,
    addGame,
    fetchGame,
    addCarousel,
    fetchCarousel
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

    app.route('/carousel')
        .post(addCarousel)
        .get(fetchCarousel);
};