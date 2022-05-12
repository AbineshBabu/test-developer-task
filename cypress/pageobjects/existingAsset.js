export class ExistingAsset{

    elements = {
        searchBar: () => cy.get('[data-test="datatable-input"] > .form-control',{timeout:12000}),
        FirstSearchedAsset: () => cy.get('td'),
        ascendingOption: () => cy.get('.sorting',{timeout:20000}),
        descendingOption: () => cy.get('.sorting_asc',{timeout:20000}),
        firstAsset: () => cy.get(':nth-child(1) > td'),
        secondAsset: () => cy.get(':nth-child(2) > td'),
        filteringAsset : () => cy.get('.custom-select',{timeout:20000}),
        assetEntries: () =>  cy.get('[data-test="table-body"]').find("tr"),
        totalAssetEntries: () => cy.get('.dataTables_info'),
        pagination: () => cy.get('.pagination').find('li')
    }

    search(assetName) {
        this.elements.searchBar().type(assetName);
    }

    searchResult() {
        return this.elements.FirstSearchedAsset();
    }

    ascendingSort() {
        this.elements.ascendingOption().click();
    }

    descendingSort() {
        this.elements.ascendingOption().click();
        this.elements.descendingOption().click();
    }

    firstAsset() {
        return this.elements.firstAsset();
    }

    secondAsset() {
        return this.elements.secondAsset();
    }

    assetEntries() {
        return this.elements.assetEntries();
    }

    totalAsset() {
        return this.elements.totalAssetEntries();
    }

    paginationCount() {
        return this.elements.pagination();
    }

    filterAsset(entriesPerPage) {
        this.elements.filteringAsset().select(entriesPerPage);
    }
}