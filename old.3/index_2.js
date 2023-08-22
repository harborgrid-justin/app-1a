const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
//  const config = require('./config/config_2.json');
// const is a keyword that is used to declare a constant variable.
// a constant variable is a variable whose value cannot be changed.
const Action = require('./services/businessRulesEngine/BRA001.js');
const ActionId = require('./services/businessRulesEngine/BRA001.js');
const ActionsManager = require('./services/businessRulesEngine/BRA001.js');

const app = express();                                  // Initialize Express
app.use(bodyParser.json());                             // Use body-parser middleware

// app.use(bodyParser.json()); works by parsing the body of the request and then setting the req.body property to the parsed value.
// app is an instance of express. It is a function that takes a request and a response object.
// use is a method on the app object that takes a middleware function.
// bodyParser.json() returns a middleware function that takes a request and a response object and calls next() with an error 
// if it exists or parses the body and sets req.body and calls next() with no arguments if it doesn't.
// So, app.use(bodyParser.json()) is a middleware function that takes a request and a response object and calls next() with an error

// After initializing express, we need to initialize the services.
// Load services
//  const ActionsManager = require('./services/businessRulesEngine/BRA001.js');
// ActionsManager is a class that is exported from BRA001.js
// It's purpose is to manage actions. It has a constructor that initializes the actions array to an empty array.
// A constructor is a special method of a class for creating and initializing an object of that class.
// A method is a function that is a property of an object.
// The constructor is called automatically when the object is created.
// An object is an instance of a class.
// A class is a blueprint for creating objects.
// Creating an object is called instantiation.
// The constructor is a method of the class that is called automatically when the object is created.
// classes create objects, objects contains properties and methods, methods are actions that can be performed on objects.
// functions are actions that can be performed on objects.
// A class is a type of function, but instead of using the keyword function to initiate it, we use the keyword class, and the properties are
// assigned inside a constructor() method.
// The purpose of an object is to group related functions and variables together.
// Objects can be global (available to all scripts in a page) or local (available only to the function that created them).
// Global objects in JavaScript are objects that are available in all JavaScript environments.
// Local objects are objects that are available only in the current environment.
// In JavaScript, an environment is a context where JavaScript code is executed.
// A context could be a web browser, a Node.js server, or any JavaScript engine.
// JavaScript objects are containers for named values called properties or methods.
// A method is a function stored as a property.
// A property is a value stored in an object.
// A JavaScript object is a collection of named values.
// The named values, in JavaScript objects, are called properties.
// A single JavaScript file can contain multiple classes.
// The environment of a JavaScript file is the JavaScript engine that executes the script.
// An object lasts for as long as it is referenced.
// In JavaScript, almost "everything" is an object.
// In NodeJS, the lifespan of an object is the duration of the request.
// The End of a javascript request is called the end of the lifespan of an object.
// You know the end of a request happens when the response is sent.
// We can use the process.on('exit') event to know when the lifespan of an object ends.
// The process.on('exit') event is emitted when the Node.js process is about to exit as a result of either:
// The process.exit() method being called explicitly.
// The Node.js event loop no longer having any additional work to perform.
// You can broadcast the process.exit() method to the console by adding a listener to the process.on('exit') event.
// The process.on('exit') event is emitted when the Node.js process is about to exit as a result of either:
// The process.exit() method being called explicitly.
// The Node.js event loop no longer having any additional work to perform.
// The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code.

//  const AdvancedActions = require('./services/businessRulesEngine/BRA002.js');
//  const BaseRule = require('./services/businessRulesEngine/BRB001.js');
//  const AdvancedRule = require('./services/businessRulesEngine/BRB002.js');
//  const RuleGroup = require('./services/businessRulesEngine/BRB003.js');
//  const BRErrorHandler = require('./services/businessRulesEngine/BRE001.js');
//  const ConditionEvaluator = require('./services/businessRulesEngine/BRC001.js');

//  Define the express server port
const PORT = process.env.PORT || 3000;              //  PORT is a user-defined name for the variable
                                                    //  process is a global object that provides information about, and control over, the current Node.js process
                                                    //  process.env is an object that contains the user environment
                                                    //  PORT is a property of the process.env object
                                                    //  process.env.PORT is the syntax for accessing the property of an object
// Start the server

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

coolId = new ActionId('ACTION_001', (data) => {         //  actionId is a user-defined name for the variable
    console.log(`Action executed for user: ${data.name}`);  //  actionId is a user-defined name for the variable
});                                                             //  ACTION_001 is a user-defined name for the property of the ActionId class

coolId4 = new ActionId();                                               //  coolId is a user-defined name for the variable
coolId2 = new ActionsManager();                                 //  coolId is a user-defined name for the variable
coolId3 = new Action();                                                    //  coolId is a user-defined name for the property of the Action class


// coolId is a user-defined name for the variable
// in order to display the value of a variable to the console, we use the console.log() method
console.log(coolId);                                        //  console.log() is a method that displays the value of a variable to the console
console.log(coolId.id);                                     //  console.log() is a method that displays the value of a variable to the console
console.log(coolId.executeFunc);                            //  console.log() is a method that displays the value of a variable to the console
console.log(coolId.data);                          //  console.log() is a method that displays the value of a variable to the console
console.log(coolId2);                                       //  console.log() is a method that displays the value of a variable to the console
console.log(coolId3);                                       //  console.log() is a method that displays the value of a variable to the console
console.log(coolId4);                                       //  console.log() is a method that displays the value of a variable to the console