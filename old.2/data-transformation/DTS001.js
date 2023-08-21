// DTS001.js - Data Transformation Service

const DataTransformationUtilities = require('./DTU001.js');

class DataTransformationService {

    constructor() {
        this.utilities = new DataTransformationUtilities();
    }

    /**
     * Transform data based on given transformation rules.
     * 
     * @param {Object} data - The data to transform.
     * @param {Object} transformationRules - The rules defining the transformation process.
     * @returns {Object} - The transformed data.
     */
    transformData(data, transformationRules) {
        if (!this.utilities.validateData(data, transformationRules.validationSchema)) {
            throw new Error('Data validation failed.');
        }

        let transformedData = data;
        
        if (transformationRules.normalizationRules) {
            transformedData = this.utilities.normalizeData(transformedData, transformationRules.normalizationRules);
        }

        if (transformationRules.filteringCriteria) {
            transformedData = this.utilities.filterData(transformedData, transformationRules.filteringCriteria);
        }

        if (transformationRules.targetFormat) {
            transformedData = this.utilities.convertFormat(transformedData, transformationRules.targetFormat);
        }

        return transformedData;
    }
}

module.exports = DataTransformationService;
