Feature: Adding new asset

    Background: 
        Given the user is in home page
        When the user navigate to add asset page
        

    Scenario: To verify whether user is able to add new asset
        And user gives a valid asset name and clicks on send key
            |assetName|
            |ABIN|
        Then a "Correct format" message is displayed
        Then a "Sucssess" pop-up containing asset name should be displayed

    Scenario: To verify whether the system displays incorrect format message
        And user gives a invalid asset name and clicks on send key
            |assetName|
            |aBIN1234567890|
        Then "Please match the requested format." message is displayed


    Scenario: To verify whether the system displays duplicacy error message
        And user gives a valid asset name and clicks on send key
            |assetName|
            |ABIN|
        Then a "Correct format" message is displayed
        Then a pop-up displaying "Asset alredy exist" should be dispalyed