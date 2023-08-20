// FER001.js

class EventManager {
    constructor() {
        // Storage for our event listeners
        this.listeners = {};
    }

    /**
     * Adds an event listener for a given event type.
     * @param {String} eventType - The event type (e.g., 'click', 'dataLoaded')
     * @param {Function} listener - The callback function to execute when the event is triggered.
     */
    on(eventType, listener) {
        if (!this.listeners[eventType]) {
            this.listeners[eventType] = [];
        }
        this.listeners[eventType].push(listener);
    }

    /**
     * Removes an event listener from a given event type.
     * @param {String} eventType - The event type (e.g., 'click', 'dataLoaded')
     * @param {Function} listener - The callback function to remove.
     */
    off(eventType, listener) {
        if (!this.listeners[eventType]) return;

        const index = this.listeners[eventType].indexOf(listener);
        if (index !== -1) {
            this.listeners[eventType].splice(index, 1);
        }
    }

    /**
     * Triggers an event, calling all listeners registered for this event type.
     * @param {String} eventType - The event type to trigger.
     * @param {...*} args - Arguments to pass to the listeners.
     */
    emit(eventType, ...args) {
        if (!this.listeners[eventType]) return;

        this.listeners[eventType].forEach(listener => {
            listener(...args);
        });
    }
}

// Exporting our EventManager
module.exports = EventManager;
