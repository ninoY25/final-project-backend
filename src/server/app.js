import contactModel from './model/contacts.js';
import {routes} from './routes/routes.js';

export function run(app) {
    routes(app);
};