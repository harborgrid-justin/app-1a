// STS002.js

class EventDrivenStateManager {
    constructor() {
        this.states = {};  // In-memory storage for state data
        this.eventListeners = {};  // Event listeners for state transitions
    }

    /**
     * Sets the state for a given key and triggers any associated events.
     * @param {string} key - Unique identifier for the state.
     * @param {any} value - The state value.
     */
    setState(key, value) {
        const previousValue = this.states[key];
        this.states[key] = value;

        // Trigger any listeners associated with this state key
        if (this.eventListeners[key]) {
            this.eventListeners[key].forEach(listener => listener(previousValue, value));
        }
    }

    /**
     * Retrieves the state for a given key.
     * @param {string} key - Unique identifier for the state.
     * @returns {any} - State value.
     */
    getState(key) {
        return this.states[key];
    }

    /**
     * Attaches an event listener to a state transition.
     * @param {string} key - Unique identifier for the state.
     * @param {function} callback - Function to be called on state change.
     */
    attachListener(key, callback) {
        if (!this.eventListeners[key]) {
            this.eventListeners[key] = [];
        }
        this.eventListeners[key].push(callback);
    }

    /**
     * Removes an event listener from a state transition.
     * @param {string} key - Unique identifier for the state.
     * @param {function} callback - Function to be removed.
     */
    detachListener(key, callback) {
        if (this.eventListeners[key]) {
            this.eventListeners[key] = this.eventListeners[key].filter(listener => listener !== callback);
        }
    }

    /**
     * Deletes the state for a given key.
     * @param {string} key - Unique identifier for the state.
     */
    deleteState(key) {
        delete this.states[key];
    }
}

module.exports = EventDrivenStateManager;
