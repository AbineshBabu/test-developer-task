Feature: verifying existing asset

    Background: 
        Given the user is in home page

    Scenario: To verify whether user is able to search existing asset
        When an asset is created
            |assetName|
            |ABIN| 
        And the user navigate to existings asset page
        And user search the created asset
        Then created asset should be displayed
        

    Scenario: To verify whether the system displays existing asset in ascending order
        When adding "5" asset
            |assetName|
            |ABIN|
        And the user navigate to existings asset page
        And user clicks on ascending option
        Then the displayed should be in ascending format

    Scenario: To verify whether the system displays existing asset in descending order
        When adding "5" asset
            |assetName|
            |ABIN|
        And the user navigate to existings asset page
        And user clicks on descending option
        Then the displayed should be in descending format

    Scenario: To verify whether the system displays the number of asset based on entries to be shown
        When adding "10" asset
            |assetName|
            |ABIN|
        And the user navigate to existings asset page
        Then filtering asset entries to be "10" per page
        Then the assert entries to be displyed is "10"
    
    Scenario: To verify whether the system displays pagination count based upon entries and total asset count
        When adding "10" asset
            |assetName|
            |ABIN|
        And the user navigate to existings asset page
        Then filtering asset entries to be "10" per page
        Then the pagination count should be appropirate to that of the total entries and number of asset to be displayed per page
