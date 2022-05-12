/// <reference types="cypress" />

import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('the user is in home page', () => {
    cy.homePage();
})