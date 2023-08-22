// BRA001.JS is indicative of the Actions class or module within the Business Rule Engine. Actions represent the steps or operations that should be carried out when certain conditions (defined in the Conditions module) are met.
// Actions are defined as functions within the Actions module. Each function is named according to the action it performs. The function name should be descriptive of the action it performs.

// BRA001.js

class Action {
    constructor(id, executeFunc) {                      //  the Action class has a constructor that takes two arguments: id and executeFunc
        this.id = id;                                   //  the constructor initializes the id property to the value of the id argument
        this.executeFunc = executeFunc;                 //  the constructor initializes the executeFunc property to the value of the executeFunc argument
    }                                                   //  the Action class has an execute method that takes one argument: inputData
                                                        //  a constructor is a special method of a class for creating and initializing an object of that class
    execute(inputData) {                                //  to initialize means to set the initial value of a variable or property
        return this.executeFunc(inputData);             //  setting the initial value of a variable or property is called initialization
    }                                                   //  this is a keyword that refers to the current object
}                                                       //  this is used to access properties of the current object

class ActionId {
    constructor(id, executeFunc) {                      //  the Action class has a constructor that takes two arguments: id and executeFunc
        this.id = id;                                   //  the constructor initializes the id property to the value of the id argument
        this.executeFunc = executeFunc;                 //  the constructor initializes the executeFunc property to the value of the executeFunc argument
    }                                                   //  the Action class has an execute method that takes one argument: inputData
                                                        //  a constructor is a special method of a class for creating and initializing an object of that class
    execute(inputData) {                                //  to initialize means to set the initial value of a variable or property
        return this.executeFunc(inputData);             //  setting the initial value of a variable or property is called initialization
    }                                                   //  this is a keyword that refers to the current object
                                                        //  execute is a user-defined or programmer-defined name for the method
}                                                       //  this is used to access properties of the current object

// the Action class is exported from BRA001.js
// the Action class has a constructor that takes two arguments: id and executeFunc
// the constructor initializes the id property to the value of the id argument
// the constructor initializes the executeFunc property to the value of the executeFunc argument
// the Action class has an execute method that takes one argument: inputData
// the execute method returns the result of calling the executeFunc property with the inputData argument

// In order to creation an action ID, we need to create an ActionsManager class.
// actionId is a user-defined name for the property of the ActionsManager class
// using ActionsManager, we can create a new action ID by calling the addAction method of the ActionsManager class
// the addAction method takes two arguments: actionId and executeFunc
// Where do we get the value for the actionId argument?
// We get the value for the actionId argument from the user.

class ActionsManager {
    constructor() {                                     //  this constructor initializes the actions property to an empty object
        this.actions = {};
        console.log("Line 1");
        this.actionIds = {};                            //  actionIds is a property of the ActionsManager class
        console.log("Line 2");  
        this.actionIdCounter = 0;                       //  actionIdCounter is a property of the ActionsManager class
        console.log("Line 3");  
        console.log("ActionsManager initialized successfully!");
        console.log("Line 4");
    }                                                   //  the word actions is a user-defined name for the property
                                                        //  the name of the object is actions and the property is actions
                                                        //  actions is both the name of the object and the name of the property
                                                        //  actions.property is the syntax for accessing the property of an object
                                                        //  .actions is the syntax for accessing the property of an object
                                                        //  the difference between actions. and .actions is that actions. is used to access the property of an object 
                                                        //  and .actions is used to access the property of a class
    addAction(actionId, executeFunc) {                                          //  the addAction method takes two arguments: actionId and executeFunc
        if (this.actions[actionId]) {                                           //  if the actions property of the ActionsManager class has a property with the name of the actionId argument
            throw new Error(`Action with ID ${actionId} already exists.`);      //  throw an error
        }                                                                       //  an error is an object that contains information about an error
        this.actions[actionId] = new Action(actionId, executeFunc);             //  the addAction method sets the value of the actions property of the ActionsManager class to a new Action object
        return actionId;                                                        //  the addAction method returns the actionId argument
        console.log("Line 5");
    }                                                                           
                                                                                // a class can include unlimited methods
    updateAction(actionId, updatedExecuteFunc) {                                // the updateAction method takes two arguments: actionId and updatedExecuteFunc
        if (!this.actions[actionId]) {                                          
            throw new Error(`Action with ID ${actionId} does not exist.`);
        }
        this.actions[actionId].executeFunc = updatedExecuteFunc;
        return true;
        console.log("Line 9");
    }

    executeAction(actionId, inputData) {
        if (!this.actions[actionId]) {
            throw new Error(`Action with ID ${actionId} does not exist.`);
        }
        return this.actions[actionId].execute(inputData);
        console.log("Line 8");
    }

    removeAction(actionId) {
        if (!this.actions[actionId]) {
            throw new Error(`Action with ID ${actionId} does not exist.`);
        }
        delete this.actions[actionId];
        return true;
        console.log("Line 7");
    }

    listAllActions() {
        return Object.keys(this.actions);
        console.log("Line 10");
    }
}

module.exports = ActionsManager, ActionId;

// module.exports is a special object which is included in every JS file in the Node.js application by default.
// module is a variable that represents the current module, and exports is an object that will be exposed as a module.
// So, whatever you assign to module.exports will be exposed as a module.
// module.exports creates an object that is exposed as a module.