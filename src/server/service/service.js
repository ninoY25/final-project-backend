
import mongoose from 'mongoose';
const Contact = mongoose.model('contacts');

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