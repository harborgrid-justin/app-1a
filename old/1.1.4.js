class RuleIdGenerator {
    #lastAssignedId; // Private field
    #prefix;

    constructor(startFrom = 1, prefix = 'RULE-') {
        this.#lastAssignedId = startFrom - 1;
        this.#prefix = prefix;
    }

    generateUniqueRuleId() {
        this.#lastAssignedId += 1;
        // Return a zero-padded ID for consistent length
        return this.#prefix + String(this.#lastAssignedId).padStart(5, '0');
    }

    resetCounter(startFrom = 1) {
        this.#lastAssignedId = startFrom - 1;
    }

    getCurrentId() {
        return this.#prefix + String(this.#lastAssignedId).padStart(5, '0');
    }

    isValidRuleId(ruleId) {
        const idPattern = new RegExp(`^${this.#prefix}\\d{5}$`);
        return idPattern.test(ruleId);
    }
}

// Example usage:
const ruleIdGenerator = new RuleIdGenerator();

const newRuleId1 = ruleIdGenerator.generateUniqueRuleId();
console.log(`Generated Rule ID: ${newRuleId1}`);

const newRuleId2 = ruleIdGenerator.generateUniqueRuleId();
console.log(`Generated Rule ID: ${newRuleId2}`);

// Example to demonstrate resetting the counter
ruleIdGenerator.resetCounter(100);
const newRuleId3 = ruleIdGenerator.generateUniqueRuleId();
console.log(`Generated Rule ID after reset: ${newRuleId3}`);

// Checking if an ID is valid
console.log(`Is ${newRuleId1} a valid ID? ${ruleIdGenerator.isValidRuleId(newRuleId1)}`);
