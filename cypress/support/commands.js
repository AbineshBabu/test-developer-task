Cypress.Commands.add('homePage',()=>{
    cy.visit('/#/')
})

Cypress.Commands.add('addAsset',()=>{
    cy.visit('/#/add')
})

Cypress.Commands.add('existingAssets',()=>{
    cy.visit('/#/assets')
})

Cypress.Commands.add('addNewAsset',(assetName)=>{
    cy.get('#defaultFormAddAsset').type(assetName)
    cy.get('[data-test="button"]').click()
})
