Feature: To test the API

Scenario: To test the asset creation and existing asset API's
    Given user hit the addAsset api with a new asset name and response should be
        |assetName|statusCode|
        |ABIZ     |201       |
    When user trying to hit the api with same asset name and response should be "409"
    When user navigate to existing asset page then the status code should be "200"