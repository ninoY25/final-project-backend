import {
    list,
    add,
    detail
} from '../controller/controller.js';

export function routes(app) {
    // Contact Routes for search and create.
    app.route('/contact')
        .get(list)
        .post(add);

    // Contact Routes for get, update and delete.
    app.route('/contact/:contactId')
        .get(detail);
};