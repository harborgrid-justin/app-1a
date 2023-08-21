// BRS001.js

class ServiceRegistry {
    constructor() {
        this.services = {}; // An object to hold registered services
    }

    /**
     * Registers a new service.
     * @param {string} serviceId - A unique identifier for the service.
     * @param {object} serviceDetails - An object containing details and metadata about the service.
     * @returns {boolean} - Returns true if the service is successfully registered.
     */
    register(serviceId, serviceDetails) {
        if (this.services[serviceId]) {
            throw new Error(`Service with ID ${serviceId} is already registered.`);
        }
        this.services[serviceId] = serviceDetails;
        return true;
    }

    /**
     * Unregisters a service.
     * @param {string} serviceId - The unique identifier for the service to be unregistered.
     * @returns {boolean} - Returns true if the service is successfully unregistered.
     */
    unregister(serviceId) {
        if (!this.services[serviceId]) {
            throw new Error(`Service with ID ${serviceId} is not registered.`);
        }
        delete this.services[serviceId];
        return true;
    }

    /**
     * Retrieves details of a registered service.
     * @param {string} serviceId - The unique identifier for the service.
     * @returns {object} - Returns the service details if found.
     */
    get(serviceId) {
        return this.services[serviceId] || null;
    }

    /**
     * Lists all registered services.
     * @returns {object[]} - An array of all registered services.
     */
    listAll() {
        return Object.values(this.services);
    }
}

module.exports = ServiceRegistry;
