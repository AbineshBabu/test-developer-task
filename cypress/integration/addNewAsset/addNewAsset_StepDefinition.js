/// <reference types="cypress"/>

import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { Helper } from '../../utility/helper'
import { AddAsset } from '../../pageobjects/addAsset';

const helper = new Helper();
const addAsset = new AddAsset(); 
const randomNumberGenerated = helper.random();
var assetName;

When('the user navigate to add asset page', () => {
    cy.addAsset();
})

And('user gives a valid asset name and clicks on send key', (datatable) => {
    datatable.hashes().forEach(element => {
        assetName = element.assetName + randomNumberGenerated;
        cy.addNewAsset(assetName);
    })  
})

And('user gives a invalid asset name and clicks on send key', (datatable)=>{
    datatable.hashes().forEach(element => {
        cy.addNewAsset(element.assetName);
    })  
})

Then('a {string} message is displayed', (message) => {
    addAsset.elements.validFeedback().then((value) => {
        const feedback = value.text();
        expect(feedback).to.equal(message);
    })
})

Then('{string} message is displayed', (message) => {
    addAsset.invalidFeedback().should('equal', message);
})

Then('a {string} pop-up containing asset name should be displayed', (message) => {
    addAsset.popUpTitle().then((value) => {
        const popupMessage = value.text();
        expect(popupMessage).equal(message);
    })
    addAsset.successpopUpBody().should('contain.text', assetName);
})

Then('a pop-up displaying {string} should be dispalyed', (message) => {
    addAsset.popUpTitle().then((value) => {
        expect(message).to.equal(value.text());
    })
})
