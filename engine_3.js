class TemporalConditionsEngine extends ConditionsEngine {
    constructor() {
        super();
        this.eventLog = [];
    }

    logEvent(eventName, data) {
        this.eventLog.push({ eventName, data, timestamp: Date.now() });
    }

    checkPattern(eventName, times, duration) {
        const now = Date.now();
        const recentEvents = this.eventLog.filter(event => event.eventName === eventName && now - event.timestamp <= duration);
        return recentEvents.length >= times;
    }

    checkDelay(eventName, delay) {
        const now = Date.now();
        const lastEvent = this.eventLog.filter(event => event.eventName === eventName).pop();
        if (!lastEvent) return false;
        return now - lastEvent.timestamp > delay;
    }

    checkSequence(eventA, eventB, span) {
        const eventARecords = this.eventLog.filter(event => event.eventName === eventA);
        for (let record of eventARecords) {
            const subsequentEvent = this.eventLog.find(e => e.eventName === eventB && e.timestamp - record.timestamp <= span);
            if (subsequentEvent) return true;
        }
        return false;
    }
}

// Usage
const temporalEngine = new TemporalConditionsEngine();

// Logging some events
temporalEngine.logEvent('login', { userID: 1 });
temporalEngine.logEvent('purchase', { userID: 1, product: 'book' });

// Checking patterns
const frequentLogins = temporalEngine.checkPattern('login', 3, 600000); // Check if 'login' happened 3 times in the last 10 minutes.

// Checking delay
const delayedPurchase = temporalEngine.checkDelay('purchase', 300000); // Check if there was no 'purchase' in the last 5 minutes.

// Checking sequence
const loginThenPurchase = temporalEngine.checkSequence('login', 'purchase', 7200000); // Check if 'login' was followed by 'purchase' within 2 hours.

console.log(frequentLogins, delayedPurchase, loginThenPurchase);
