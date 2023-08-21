// EVE001.js - Central Event Manager

const EventEmitter = require('events');

class CentralEventManager extends EventEmitter {
    constructor() {
        super();
        this.maxListeners = 100; // Setting a limit to the maximum number of listeners for any event
    }

    /**
     * Register an event listener.
     * @param {string} eventName - Name of the event to listen to.
     * @param {Function} listener - The callback function to be executed when the event is emitted.
     */
    registerListener(eventName, listener) {
        this.on(eventName, listener);
    }

    /**
     * Emit an event.
     * @param {string} eventName - Name of the event to emit.
     * @param {...any} args - Arguments to be passed to the event listeners.
     */
    triggerEvent(eventName, ...args) {
        this.emit(eventName, ...args);
    }

    /**
     * Remove an event listener.
     * @param {string} eventName - Name of the event.
     * @param {Function} listener - The callback function to be removed.
     */
    removeListener(eventName, listener) {
        this.off(eventName, listener);
    }

    /**
     * Get all listeners for a specific event.
     * @param {string} eventName - Name of the event.
     * @returns {Array} - Array of listeners for the specified event.
     */
    getAllListeners(eventName) {
        return this.listeners(eventName);
    }
}

module.exports = new CentralEventManager();
