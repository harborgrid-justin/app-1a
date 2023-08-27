const EngineOneModel = require('../models/engineOneModel');
const EngineError = require('../utilities/EngineError');

class EngineOneService {
    async fetchEngineOneData(params) {
        try {
            const data = await EngineOneModel.find(params);
            return data;
        } catch (error) {
            throw new EngineError('Failed to fetch data for Engine One', 500);
        }
    }

    async createEngineOneData(data) {
        try {
            const newData = new EngineOneModel(data);
            await newData.save();
            return newData;
        } catch (error) {
            throw new EngineError('Failed to create data for Engine One', 500);
        }
    }

    async updateEngineOneData(id, data) {
        try {
            const updatedData = await EngineOneModel.findByIdAndUpdate(id, data, { new: true });
            if (!updatedData) {
                throw new EngineError('Data not found for Engine One', 404);
            }
            return updatedData;
        } catch (error) {
            if (error instanceof EngineError) {
                throw error;
            }
            throw new EngineError('Failed to update data for Engine One', 500);
        }
    }

    async deleteEngineOneData(id) {
        try {
            const deletedData = await EngineOneModel.findByIdAndDelete(id);
            if (!deletedData) {
                throw new EngineError('Data not found for Engine One', 404);
            }
            return deletedData;
        } catch (error) {
            if (error instanceof EngineError) {
                throw error;
            }
            throw new EngineError('Failed to delete data for Engine One', 500);
        }
    }
}

module.exports = new EngineOneService();
