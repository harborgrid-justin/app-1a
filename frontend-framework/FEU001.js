// FEU001.js

/**
 * Utility function to format date in 'YYYY-MM-DD' format.
 * @param {Date} date - The input date.
 * @returns {string} Formatted date.
 */
function formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

/**
 * Utility function to deep clone an object.
 * @param {Object} obj - The input object.
 * @returns {Object} Deep cloned object.
 */
function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

/**
 * Utility function to debounce function calls.
 * @param {Function} func - The input function.
 * @param {number} wait - The debounce delay in milliseconds.
 * @returns {Function} Debounced function.
 */
function debounce(func, wait) {
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Exporting the utility functions
export {
    formatDate,
    deepClone,
    debounce
};
