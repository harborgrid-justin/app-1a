const EngineOneService = require('../services/engineOneService');
const logger = require('../utilities/logger');

class EngineOneController {
    static async getAll(req, res) {
        try {
            const records = await EngineOneService.fetchEngineOneData();
            res.json(records);
        } catch (err) {
            logger.error(`Error fetching all records: ${err.message}`);
            res.status(500).send(err.message);
        }
    }

    static async getById(req, res) {
        try {
            const record = await EngineOneService.fetchEngineOneData({ id: req.params.id });
            if (!record) {
                return res.status(404).send('Record not found');
            }
            res.json(record);
        } catch (err) {
            logger.error(`Error fetching record by ID: ${err.message}`);
            res.status(500).send(err.message);
        }
    }

    static async create(req, res) {
        try {
            const newRecord = await EngineOneService.createEngineOneData(req.body);
            res.status(201).json(newRecord);
        } catch (err) {
            logger.error(`Error creating new record: ${err.message}`);
            res.status(400).send(err.message);
        }
    }

    static async update(req, res) {
        try {
            const updatedRecord = await EngineOneService.updateEngineOneData(req.params.id, req.body);
            if (!updatedRecord) {
                return res.status(404).send('Record not found');
            }
            res.json(updatedRecord);
        } catch (err) {
            logger.error(`Error updating record: ${err.message}`);
            res.status(400).send(err.message);
        }
    }

    static async delete(req, res) {
        try {
            await EngineOneService.deleteEngineOneData(req.params.id);
            res.json({ message: 'Record deleted successfully' });
        } catch (err) {
            logger.error(`Error deleting record: ${err.message}`);
            res.status(500).send(err.message);
        }
    }
}

module.exports = EngineOneController;
