// DTM002.js - Data Transformation Mapper

class DataTransformationMapper {

    /**
     * Transform the data based on given transformation rules.
     * 
     * @param {Object} data - The data to transform.
     * @param {Object} transformationRules - The rules to apply during transformation.
     * @returns {Object} - Transformed data.
     */
    transformData(data, transformationRules) {
        if (!data || !transformationRules) {
            throw new Error('Data and transformation rules are required.');
        }

        let transformedData = {};

        // Loop through each transformation rule and apply it to the data.
        for (let ruleKey in transformationRules) {
            let rule = transformationRules[ruleKey];

            // Basic mapping from source field to target field.
            if (rule.sourceField && rule.targetField) {
                transformedData[rule.targetField] = data[rule.sourceField];
            }

            // As an example, let's handle a transformation rule type called 'toUpperCase'.
            // More transformation types can be added as per requirements.
            if (rule.transformationType === 'toUpperCase' && rule.targetField) {
                transformedData[rule.targetField] = transformedData[rule.targetField].toUpperCase();
            }
        }

        return transformedData;
    }
}

module.exports = DataTransformationMapper;
