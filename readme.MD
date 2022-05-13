# Elinvar Automation Test Suite

A Cypress Automation Test Framework with cucumber to validate the all business features of the test-developer-task application.

## Table of contents

* Getting started
  * Prerequisites
  * Installation
  * Folder Structure
  
* How to run the tests
  * Test execution
  
### Prerequisites

- [Node.js](https://nodejs.org/) v14.15.5 - should be installed in the machine.


### Installation

 1) Clone the repository using below steps,

 ```sh
 git clone https://github.com/AbineshBabu/test-developer-task.git
 cd test-developer-task
 ```

 2) Install dependencies:

 ```sh
 npm install
 ```
 
### Folder Structure

- `integration` - To maintain all the test cases (Feature file and Step Definition)
- `pageobjects` - To maintain page elements and page actions.
- `plugins` - To maintain the events listeners. Logs the events.
- `support` - To maintain reusable scripts.
- `utility` - To maintain helper functions.
- `cypress.json` - Cypress configurations. Override default values

## How to run the tests

  ### Prerequisites for Test Execution
 - `npm run start` - To start the frontend server.
 - `npm run start-api` - To start the backend server
 
  ### Test execution
 - `npm run test-script` - To execute all the test cases developed in cucumber.
 - `npm run test-add-asset` - To execute the test cases specific to add asset functionality.
 - `npm run test-existing-asset` - To execute the test cases specific to existing asset functionality.
 -  `npm run cypress-open` - To execute the test cases in open mode.
 
  ### Post Test Execution
-  `npm run generate-report` - To execute the test cases in open mode.