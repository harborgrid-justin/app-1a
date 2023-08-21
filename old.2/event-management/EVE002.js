// EVE002.js - Event Emitter Module

const EventEmitter = require('events');

class CustomEventEmitter extends EventEmitter {}

const eventEmitterInstance = new CustomEventEmitter();

/**
 * Register a listener for a specific event.
 * @param {string} eventName - Name of the event to listen for.
 * @param {Function} listener - The callback function to execute when the event is emitted.
 */
function registerEventListener(eventName, listener) {
    eventEmitterInstance.on(eventName, listener);
}

/**
 * Emit a specific event, optionally with some data.
 * @param {string} eventName - Name of the event to emit.
 * @param {any} [data] - Optional data to send with the event.
 */
function emitEvent(eventName, data) {
    eventEmitterInstance.emit(eventName, data);
}

module.exports = {
    registerEventListener,
    emitEvent
};
