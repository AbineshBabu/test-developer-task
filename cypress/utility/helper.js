export class Helper {

    random() {
        const randomNumberWrapper = () => Cypress._.random(1000000000, 9999999999);
        const generatedRandomNumber = randomNumberWrapper();
        return generatedRandomNumber;
    }
    
    isAscending(firstAsset, secondAsset) {
        const firstAssetText = firstAsset.substring(0,4);
        const secondAssetText = secondAsset.substring(0,4);

        const firsAssetValue = Number(firstAsset.substring(4));
        const secondAssetValue = Number(secondAsset.substring(4));

        const comparedValue = firstAssetText.localeCompare(secondAssetText);
        
        var textAscending = false;
        var valueAscending = false;
            
        if (comparedValue === 0) {
            textAscending = true;
            if (firsAssetValue < secondAssetValue) {
                valueAscending = true;
            }
        }
        else if (comparedValue === -1) {
            textAscending = true;
            if (firsAssetValue < secondAssetValue) {
                valueAscending = true;
            }
        }
        else {
            return false;
        }
        return (textAscending === valueAscending) ? true : false;
    }

    isDescending(firstAsset, secondAsset) {

        const firstAssetText = firstAsset.substring(0,4);
        const secondAssetText = secondAsset.substring(0,4);

        const firstAssetValue = Number(firstAsset.substring(4));
        const secondAssetValue = Number(secondAsset.substring(4));

        const comparedValue = firstAssetText.localeCompare(secondAssetText);
        
        var textAscending = false;
        var valueAscending = false;
            
        if (comparedValue === 0) {
            textAscending = true;
            if (firstAssetValue > secondAssetValue) {
                valueAscending = true;
            }
        }
        else if (comparedValue === 1) {
            textAscending = true;
            valueAscending = true;
        }
        else {
            return false;
        }
        return (textAscending === valueAscending) ? true : false;
    }

    totalPageCount (value, entriesPerPage) {
        const totalEntry = Number(value.split(' ')[5]);
        const totalPaginationCount = totalEntry / Number(entriesPerPage);
        return Math.ceil(totalPaginationCount);
    }
}