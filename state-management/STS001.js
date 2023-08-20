// STS001.js

class StateManager {
    constructor() {
        this.states = {}; // In-memory storage for state data
    }

    /**
     * Sets the state for a given key.
     * @param {string} key - Unique identifier for the state.
     * @param {any} value - The state value.
     */
    setState(key, value) {
        this.states[key] = value;
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
     * Checks if a state exists for a given key.
     * @param {string} key - Unique identifier for the state.
     * @returns {boolean} - True if the state exists, otherwise false.
     */
    hasState(key) {
        return key in this.states;
    }

    /**
     * Deletes the state for a given key.
     * @param {string} key - Unique identifier for the state.
     */
    deleteState(key) {
        delete this.states[key];
    }

    /**
     * Clears all states.
     */
    clearAllStates() {
        this.states = {};
    }
}

module.exports = StateManager;
