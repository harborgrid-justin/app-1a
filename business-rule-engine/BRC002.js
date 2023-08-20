// BRC002.js

class MessageConsumer {
    constructor() {
        this.handlers = {}; // Handlers for specific message types
    }

    /**
     * Registers a handler for a specific message type.
     * @param {string} messageType - The type of message to handle.
     * @param {function} handlerFunc - The function to handle the message.
     * @returns {boolean} - Returns true if the handler is successfully registered.
     */
    registerHandler(messageType, handlerFunc) {
        if (this.handlers[messageType]) {
            throw new Error(`Handler for message type ${messageType} is already registered.`);
        }
        this.handlers[messageType] = handlerFunc;
        return true;
    }

    /**
     * Consumes a message and invokes the appropriate handler.
     * @param {string} messageType - The type of message being consumed.
     * @param {object} messageData - The data associated with the message.
     * @returns {boolean} - Returns true if the message is successfully consumed.
     */
    consume(messageType, messageData) {
        const handlerFunc = this.handlers[messageType];
        if (!handlerFunc) {
            throw new Error(`No handler registered for message type ${messageType}.`);
        }
        handlerFunc(messageData);
        return true;
    }

    /**
     * Unregisters a handler for a specific message type.
     * @param {string} messageType - The type of message.
     * @returns {boolean} - Returns true if the handler is successfully unregistered.
     */
    unregisterHandler(messageType) {
        if (!this.handlers[messageType]) {
            throw new Error(`No handler registered for message type ${messageType}.`);
        }
        delete this.handlers[messageType];
        return true;
    }
}

module.exports = MessageConsumer;
