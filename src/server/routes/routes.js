import {
    autheticate, addUser,fetchUser
} from '../controller/controller.js';

export function routes(app) {
    
    app.route('/users/authenticate')
        // .get(list)
        .post(autheticate);

    
    app.route('/user')
        .post(addUser);

    app.route('/user/:userid')
        .get(fetchUser);
};