import contactModel from './model/contacts.js';
import userModel from './model/user.js';
import steamAppsModel from './model/steamApps.js';
import gameModel from './model/game';
import carsouelModel from './model/carousel';
import {routes} from './routes/routes.js';

export function run(app) {
    routes(app);
};