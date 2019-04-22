import {
    search,
    get,
    save
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

export function add(request, response) {
    let newContact = Object.assign({}, request.body),
        callback = function (contact) {
            response.status(200);
            response.json(contact);
        };
    save(newContact, callback);
}