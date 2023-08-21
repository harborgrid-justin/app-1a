// business rule and orchestration engine application

const express = require('express');                                     // purpose: express web server framework provides a framework for building web applications
const cors = require('cors');                                           // purpose: to enable cross-origin resource sharing
const bodyParser = require('body-parser');                              // purpose: to parse incoming requests
const morgan = require('morgan');                                       // purpose: to log requests to the console
const dotenv = require('dotenv');                                       // purpose: to load environment variables from.env file into process.
const mongoose = require('mongoose');                                   // purpose: to connect to MongoDB database
const passport = require('passport');                                   // purpose: to authenticate requests
const session = require('express-session');                             // purpose: to store user session information
const lodash = require('lodash');                                       // purpose: to provide utility functions for common programming tasks
const _ = require('underscore');                                        // purpose: to provide utility functions for common programming tasks
const ActionsManager = require('./business-rule-engine/BRA001');        // purpose: to manage actions
const AdvancedActions = require('./business-rule-engine/BRA002');       // purpose: to provide advanced actions
const BaseRule = require('./business-rule-engine/BRB001');              // purpose: to provide base rule functionality
const { AdvancedRule } = require('./business-rule-engine/BRB002');      // purpose: to provide advanced rule functionality
const RuleGroup = require('./business-rule-engine/BRB003');             // purpose: to provide rule group functionality
const createRuleGroup = require('./business-rule-engine/BRB004');       // purpose: to provide rule group functionality
const ConditionEvaluator = require('./business-rule-engine/BRC001');    // purpose: to evaluate conditions