// UTL001.js

/**
 * Check if an object is empty.
 * @param {Object} obj - The object to check.
 * @returns {Boolean} - True if the object is empty, false otherwise.
 */
function isEmptyObject(obj) {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

/**
 * Capitalizes the first letter of a string.
 * @param {String} str - The string to capitalize.
 * @returns {String} - The capitalized string.
 */
function capitalizeFirstLetter(str) {
    if (typeof str !== 'string') return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Generate a random string of a given length.
 * @param {Number} length - The desired length of the random string.
 * @returns {String} - The generated random string.
 */
function generateRandomString(length = 8) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/**
 * Remove special characters from a string.
 * @param {String} str - The string to process.
 * @returns {String} - The string without special characters.
 */
function removeSpecialCharacters(str) {
    return str.replace(/[^\w\s]/gi, '');
}

// Add more utility functions as needed...

module.exports = {
    isEmptyObject,
    capitalizeFirstLetter,
    generateRandomString,
    removeSpecialCharacters
};
