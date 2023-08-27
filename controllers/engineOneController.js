const EngineOneModel = require('./engineOneModel');

class EngineOneController {
    // Fetch all records
    static async getAll(req, res) {
        try {
            const records = await EngineOneModel.findAll();
            res.json(records);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    // Fetch a single record by ID
    static async getById(req, res) {
        try {
            const record = await EngineOneModel.findById(req.params.id);
            if (!record) {
                return res.status(404).send('Record not found');
            }
            res.json(record);
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    // Create a new record
    static async create(req, res) {
        try {
            const newRecord = new EngineOneModel(req.body);
            await newRecord.save();
            res.status(201).json(newRecord);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    // Update a record by ID
    static async update(req, res) {
        try {
            const updatedRecord = await EngineOneModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedRecord) {
                return res.status(404).send('Record not found');
            }
            res.json(updatedRecord);
        } catch (err) {
            res.status(400).send(err.message);
        }
    }

    // Delete a record by ID
    static async delete(req, res) {
        try {
            const deletedRecord = await EngineOneModel.findByIdAndDelete(req.params.id);
            if (!deletedRecord) {
                return res.status(404).send('Record not found');
            }
            res.json({ message: 'Record deleted successfully' });
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}

module.exports = EngineOneController;
