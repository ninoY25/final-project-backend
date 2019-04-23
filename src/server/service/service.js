import mongoose from 'mongoose';
const Contact = mongoose.model('contacts');
const User = mongoose.model('user');
const SteamApp = mongoose.model('steamApps');
const Carousel = mongoose.model('carousel');
const Game = mongoose.model('game');

/**
 * Throws error if error object is present.
 *
 * @param {Object} error {Error object}
 */
let throwError = function (error) {
    if (error) {
        throw Error(error);
    }
};

/**
 * Returns an array of contact object matching the search parameters.
 *
 * @param {Object} params {Search parameters}
 * @param {function} callback {Sucess callback function}
 */
export function search(params, callback) {
    let resultCallback = function (err, contact) {
        throwError(err);
        callback(contact);
    };
    Contact.find(params, resultCallback);
};

/**
 * Saves and returns the new contact object.
 *
 * @param {Object} contact {Sticky contact}
 * @param {function} callback {Sucess callback function}
 */
export function save(contact, callback) {
    let newContact = new Contact(contact),
        resultCallback = function (err, contact) {
            throwError(err);
            callback(contact);
        };
    newContact.save(resultCallback);
};

/**
 * Returns the contact object matching the id.
 *
 * @param {string} contactId {Id of the contact object}
 * @param {function} callback {Sucess callback function}
 */
export function get(contactId, callback) {
    let resultCallback = function (err, contact) {
        throwError(err);
        callback(contact);
    };
    Contact.findById(contactId, resultCallback);
};

export function getUser(requestBody, callback) {
    let resultCallback = function (err, user) {
        throwError(err);
        user = user[0];
        callback(user);
    }
    User.find(requestBody, resultCallback);
}

export function getUserById(userId, callback) {
    let resultCallback = function (err, user) {
        throwError(err);
        callback(user);
    }
    User.findById(userId, resultCallback);
}

export function saveUser(user, callback) {
    let newUser = new User(user),
        resultCallback = function (err, user) {
            throwError(err);
            callback(user);
        };
    newUser.save(resultCallback);
};

export function getSteamApps(requestBody, callback) {
    let resultCallback = function (error, apps) {
        throwError(error);
        callback(apps);
    }
    SteamApp.find({}, resultCallback);
}

export function saveSteamApp(app, callback) {

    let newApps = [];
    for (let a in app) {
        newApps.push(app[a]);
    }
    let resultCallback = function (error, apps) {
        throwError(error);
        callback(apps);
    }
    SteamApp.collection.insertMany(newApps, resultCallback);
}

export function getGames(requestBody, callback) {
    let resultCallback = function (error, apps) {
        throwError(error);
        callback(apps);
    }
    Game.find({}, resultCallback);
}

export function saveGame(app, callback) {

    let newApps = [];
    for (let a in app) {
        newApps.push(app[a]);
    }
    let resultCallback = function (error, apps) {
        throwError(error);
        callback(apps);
    }
    Game.collection.insertMany(newApps, resultCallback);
}

export function getCarousels(requestBody, callback) {
    let resultCallback = function (error, apps) {
        throwError(error);
        callback(apps);
    }
    Carousel.find({}, resultCallback);
}

export function saveCarousel(app, callback) {

    let newApps = [];
    for (let a in app) {
        newApps.push(app[a]);
    }
    let resultCallback = function (error, apps) {
        throwError(error);
        callback(apps);
    }
    Carousel.collection.insertMany(newApps, resultCallback);
}