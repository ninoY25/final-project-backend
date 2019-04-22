import {
    search,
    get,
    save,
    getUser,
    saveUser,
    getUserById,
    saveSteamApp,
    getSteamApps
} from '../service/service.js';

export function list(request, response) {
    let callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    let searchQuery = {};
    if (request.query.lastName) {
        searchQuery = {
            lastName: request.query.lastName
        };
    }
    search(searchQuery, callback);
}

export function detail(request, response) {
    let callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    get(request.params.contactId, callback);
}

export function fetchUser(request, response) {
    let callback = function (contact) {
        response.status(200);
        response.json(contact);
    };
    getUserById(request.params, callback);
}

export function add(request, response) {
    let newContact = Object.assign({}, request.body),
        callback = function (contact) {
            response.status(200);
            response.json(contact);
        };
    save(newContact, callback);
}

export function addUser(request, response) {
    let newUser = Object.assign({}, request.body),
        callback = function (user) {
            response.status(200);
            response.json(user);
        };
    saveUser(newUser, callback);
}

export function autheticate(request, response) {
    if (request.body.username && request.body.password) {
        let callback = function (user) {
            if (user && user._id) {
                response.status(200);
                response.json(user);
            } else {
                response.status(400);
                response.json({
                    "message": 'Username or password is incorrect'
                });
            }
        }
        getUser(request.body, callback);
    } else {
        response.status(400);
        response.json({
            "message": 'Invalid input'
        });
    }

}

export function addSteamApp(request, response){
    // let newApp = Object.assign({}, request.body),
    let callback = function (newApp) {
        response.status(200);
        response.json(newApp);
    };
    saveSteamApp(request.body, callback);
}

export function fetchSteamApp(request, response){
    let callback = function (steamApp) {
        response.status(200);
        response.json(steamApp);
    };
    getSteamApps(request, callback);
}

