// DTM001.js - Basic Data Mapping

/**
 * This module provides simple data mapping functionalities like changing 
 * field names or converting data types.
 */

class BasicDataMapping {

    /**
     * Rename a key in a given object.
     * 
     * @param {Object} data - The original data object.
     * @param {String} oldKey - The key to be renamed.
     * @param {String} newKey - The new key name.
     * @returns {Object} - The data object with the key renamed.
     */
    renameKey(data, oldKey, newKey) {
        if (oldKey !== newKey) {
            Object.defineProperty(data, newKey,
                Object.getOwnPropertyDescriptor(data, oldKey));
            delete data[oldKey];
        }
        return data;
    }

    /**
     * Convert the data type of a value in the given object.
     * 
     * @param {Object} data - The original data object.
     * @param {String} key - The key whose value needs type conversion.
     * @param {String} targetType - The target data type (e.g., 'string', 'number').
     * @returns {Object} - The data object with the value's type converted.
     */
    convertType(data, key, targetType) {
        const value = data[key];
        if (value === undefined || value === null) {
            return data;
        }

        switch (targetType) {
            case 'string':
                data[key] = String(value);
                break;
            case 'number':
                data[key] = Number(value);
                break;
            default:
                throw new Error('Unsupported target type.');
        }
        return data;
    }
}

module.exports = BasicDataMapping;
