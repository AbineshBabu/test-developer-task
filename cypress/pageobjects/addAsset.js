export class AddAsset{

    elements={
        newAsset: () => cy.get('#defaultFormAddAsset'),
        closePopUp: () => cy.get('[data-test="modal-footer"] > [data-test="button"]'),
        validFeedback: () => cy.get('.valid-feedback'),
        popUpTitle: () => cy.get('.modal-title'),
        successpopUpBody: () => cy.get('[data-test="modal-body"]'),
        invalidFeedback: () => cy.get('#defaultFormAddAsset:invalid')
    }

    clearAssetName() {
        this.elements.newAsset().clear();
    }

    clickClosePopUp() {
        this.elements.closePopUp().click();
    }

    invalidFeedback() {
        return this.elements.invalidFeedback().invoke('prop', 'validationMessage');
    }

    successpopUpBody() {
        return this.elements.successpopUpBody();
    }

    popUpTitle() {
        return this.elements.popUpTitle();
    }
}