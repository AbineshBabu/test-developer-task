/// <reference types="cypress"/>

import { When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import { Helper } from '../../utility/helper';
import { AddAsset } from '../../pageobjects/addAsset';
import { ExistingAsset } from '../../pageobjects/existingAsset';

const helper = new Helper();
const addAsset = new AddAsset();
const existingAsset = new ExistingAsset();
const randomNumberGenerated = helper.random();
var assetName;
var entriesPerPage;

When('an asset is created', (datatable) => {
    cy.addAsset();
    datatable.hashes().forEach(element => {
        assetName = element.assetName + randomNumberGenerated;
        cy.addNewAsset(assetName);
    })
})

When('adding {string} asset', (value,datatable) => {
    for (let index = 1; index <=value; index++) {
        cy.addAsset();
        addAsset.clearAssetName();
        datatable.hashes().forEach(element => {
            cy.addNewAsset(element.assetName+helper.random());
        })
        addAsset.clickClosePopUp();
    }
})

And('the user navigate to existings asset page', () => {
   cy.existingAssets();
})

And('user search the created asset', () => {
    existingAsset.search(assetName);  
})

Then('created asset should be displayed', () => {
    existingAsset.searchResult().then((value) => {
        expect(assetName).equal(value.text());
    })
})

And('user clicks on ascending option', () => {
    existingAsset.ascendingSort();
})

And('user clicks on descending option', () => {
    existingAsset.descendingSort(); 
})

Then('the displayed should be in ascending format', () => {
    existingAsset.firstAsset().then((valueOne) => {
        existingAsset.secondAsset().then((valueTwo) => {
            expect(helper.isAscending(valueOne.text(), valueTwo.text())).to.be.true;
        })
    })
})

Then('the displayed should be in descending format', () => {
    existingAsset.firstAsset().then((valueOne) => {
        existingAsset.secondAsset().then((valueTwo) => {
            expect(helper.isDescending(valueOne.text(), valueTwo.text())).to.be.true;
        })
    })
})

Then('filtering asset entries to be {string} per page', (value) => {
    entriesPerPage = value;
    existingAsset.filterAsset(value);
})

Then('the assert entries to be displyed is {string}', (value) => {
    existingAsset.assetEntries().then((row) => {
      expect(Number(value)).equal(row.length);
    });
})

Then('the pagination count should be appropirate to that of the total entries and number of asset to be displayed per page', () => {
    existingAsset.totalAsset().then((valueOne) => {
       existingAsset.paginationCount().then((valueTwo)=>{
           const pageCount = helper.totalPageCount(valueOne.text(),entriesPerPage);
           const pagination = valueTwo.length - 2;
           expect(pageCount).to.equal(pagination);
     })
    })
})