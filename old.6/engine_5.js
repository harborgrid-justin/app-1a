const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/engineDB', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB');
});

const RuleSchema = new mongoose.Schema({
    type: String, // 'business', 'orchestration', or 'decision'
    name: String,
    condition: String,
    action: String,
    details: mongoose.Schema.Types.Mixed
});

const Rule = mongoose.model('Rule', RuleSchema);

class CombinedEngine {
    async evaluate(data) {
        const rules = await Rule.find({});

        for (let rule of rules) {
            if (this[rule.type]) {
                let result = this[rule.type](rule, data);
                if (result) return result;
            }
        }
    }

    business(rule, data) {
        if (this.evaluateCondition(rule.condition, data)) {
            return this.executeAction(rule.action, data);
        }
    }

    orchestration(rule, data) {
        // Process orchestration logic. For our simplicity, we use conditions and actions too.
        if (this.evaluateCondition(rule.condition, data)) {
            return this.executeAction(rule.action, data);
        }
    }

    decision(rule, data) {
        if (this.evaluateCondition(rule.condition, data)) {
            return this.executeAction(rule.action, data);
        }
    }

    // Safe Condition Evaluator - instead of dynamic evaluations
    evaluateCondition(condition, data) {
        switch (condition) {
            case "ageAbove18":
                return data.age >= 18;
            case "experienceAbove2":
                return data.experience >= 2;
            // ... Add more predefined conditions as needed
            default:
                return false;
        }
    }

    // Safe Action Executor
    executeAction(action, data) {
        switch (action) {
            case "eligibility":
                return "Eligible for job application";
            case "acceptApplication":
                return "Accept application";
            // ... Add more predefined actions as needed
            default:
                return "Unknown action";
        }
    }
}

const sampleRules = [
    {
        type: 'business',
        name: 'Age Verification',
        condition: "ageAbove18",
        action: "eligibility"
    },
    {
        type: 'decision',
        name: 'Application Decision',
        condition: "experienceAbove2",
        action: "acceptApplication"
    }
];

Rule.insertMany(sampleRules, (err) => {
    if (err) return console.error(err);
    console.log("Rules saved to MongoDB");
});

const engine = new CombinedEngine();

engine.evaluate({ age: 25, experience: 3 })
    .then(result => console.log(result))
    .catch(err => console.error(err));
