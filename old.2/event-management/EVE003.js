// EVE003.js - Event Listener Module

const { registerEventListener } = require('./EVE002.js');

/**
 * Handle the 'dataUpdated' event.
 * This function will be called whenever the 'dataUpdated' event is emitted.
 * @param {Object} data - Data associated with the 'dataUpdated' event.
 */
function onDataUpdated(data) {
    console.log('Data has been updated:', data);
    // Add more logic here as needed...
}

/**
 * Handle the 'userConnected' event.
 * This function will be called whenever the 'userConnected' event is emitted.
 * @param {Object} user - Data about the connected user.
 */
function onUserConnected(user) {
    console.log('User connected:', user);
    // Add more logic here as needed...
}

// Registering event listeners
registerEventListener('dataUpdated', onDataUpdated);
registerEventListener('userConnected', onUserConnected);

console.log('Event listeners in EVE003.js are now active.');
