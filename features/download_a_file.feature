Feature: Downloading file

@test
Scenario: Download a file
    Given user enters page
    When user downloads some text file
    Then the file is downloaded
