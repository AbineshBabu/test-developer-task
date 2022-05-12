/// <reference types="cypress"/>

import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import { Helper } from '../../utility/helper';

const helper = new Helper();
const randomNumberGenerated = helper.random();
const apiBaseUrl = 'http://localhost:3000';
var assetName;

Given('user hit the addAsset api with a new asset name and response should be', (datatable) => {
    datatable.hashes().forEach(element => {
        assetName = element.assetName + randomNumberGenerated;
        cy.request({
            method: "post",
            url: apiBaseUrl + "/addAsset/" + assetName,
            failOnStatusCode: false
        }).then((res) => {
            expect(res.status).equal(Number(element.statusCode));
        })
    })
})

When('user trying to hit the api with same asset name and response should be {string}', (statusCode) => {
    cy.request({
        method: "post",
        url: apiBaseUrl + "/addAsset/" + assetName,
        failOnStatusCode: false
    }).then((res)=>{
        expect(res.status).equal(Number(statusCode));
    })
})

When('user navigate to existing asset page then the status code should be {string}', (statusCode) => {
    cy.request({
        method: "get",
        url: apiBaseUrl + "/getAssets",
        failOnStatusCode: false
    }).then((res)=>{
        expect(res.status).equal(Number(statusCode));
    })
})
