# OrchestrationEngine

A unified engine for making weighted decisions, processing business rules, queuing human tasks, and orchestrating complex processes.

## Features:

- Dynamic Rule and Decision Addition
- Weighted Decisions
- Human Task Queueing
- Subscription Model for Real-time Notifications
- API integration with MongoDB and a basic HTML frontend

## Setup:

1. Ensure you have MongoDB running and the necessary Node.js drivers installed.
2. Implement the MongoDB methods as per your schema.
3. Integrate the provided frontend API with your HTML application.
4. Use the engine's API to add rules, decisions, and subscribers as needed.

## API:

### Backend:

- `addRule(name, fn, weight)`: Adds a new rule.
- `decide(data)`: Makes a decision based on the provided data.
- `addDecision(name)`: Adds a possible decision outcome.
- `subscribe(fn)`: Subscribes to notifications.
- `getTasks()`: Retrieves tasks needing human intervention.

### Frontend:

- `sendDecision(decision)`: Sends the decision to the frontend.
- `sendTask(task)`: Notifies the frontend of a new human task.

### MongoDB:

- `fetchData(query)`: Fetch data based on a query.
- `storeDecision(decision)`: Store decisions for historical tracking.
