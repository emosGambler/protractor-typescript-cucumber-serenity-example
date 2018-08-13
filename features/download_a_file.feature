Feature: Downloading file

Scenario: Download a file
    Given user enters page
    When user downloads some text file
    Then the file is downloaded
