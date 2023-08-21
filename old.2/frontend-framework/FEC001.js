// FEC001.js

/**
 * Custom Event Manager Class.
 * Allows for the creation, dispatch, and listening of custom events in the application.
 */
class CustomEventManager {
    constructor() {
        this.events = {};
    }

    /**
     * Adds an event listener for a custom event.
     * @param {string} eventName - Name of the custom event.
     * @param {Function} callback - Callback function to be executed when the event is triggered.
     */
    on(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(callback);
    }

    /**
     * Removes an event listener for a custom event.
     * @param {string} eventName - Name of the custom event.
     * @param {Function} callback - Callback function to be removed.
     */
    off(eventName, callback) {
        if (!this.events[eventName]) return;

        const index = this.events[eventName].indexOf(callback);
        if (index !== -1) {
            this.events[eventName].splice(index, 1);
        }
    }

    /**
     * Dispatches a custom event.
     * @param {string} eventName - Name of the custom event.
     * @param {Object} data - Any data to be passed to the event listeners.
     */
    emit(eventName, data) {
        if (!this.events[eventName]) return;

        this.events[eventName].forEach(callback => {
            callback(data);
        });
    }
}

// Exporting the Custom Event Manager
export default CustomEventManager;
