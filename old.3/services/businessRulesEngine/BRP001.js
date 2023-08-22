// BRP001.js

class MessagePublisher {
    constructor() {
        this.subscribers = {};  // An object to hold subscribers keyed by event types
    }

    /**
     * Registers a subscriber for a specific event.
     * @param {string} eventType - The type of event to subscribe to.
     * @param {function} callback - The callback function to execute when the event is published.
     * @returns {boolean} - Returns true if the subscriber is successfully registered.
     */
    subscribe(eventType, callback) {
        if (!this.subscribers[eventType]) {
            this.subscribers[eventType] = [];
        }
        this.subscribers[eventType].push(callback);
        return true;
    }

    /**
     * Publishes an event, notifying all subscribers.
     * @param {string} eventType - The type of event being published.
     * @param {object} data - The data associated with the event.
     * @returns {boolean} - Returns true if the event is successfully published.
     */
    publish(eventType, data) {
        if (!this.subscribers[eventType]) {
            return false;  // No subscribers for this event type
        }
        this.subscribers[eventType].forEach(callback => callback(data));
        return true;
    }

    /**
     * Unsubscribes a specific callback from an event type.
     * @param {string} eventType - The type of event to unsubscribe from.
     * @param {function} callback - The callback function to unsubscribe.
     * @returns {boolean} - Returns true if the subscriber is successfully unsubscribed.
     */
    unsubscribe(eventType, callback) {
        if (!this.subscribers[eventType]) {
            return false;  // No subscribers for this event type
        }
        this.subscribers[eventType] = this.subscribers[eventType].filter(sub => sub !== callback);
        return true;
    }
}

module.exports = MessagePublisher;
