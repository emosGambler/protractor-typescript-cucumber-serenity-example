Feature: Working with items on a todo list

  In order to avoid having to remember things that need doing
  As a forgetful person
  I want to be able to record what I need to do in a place where I won't forget about them

  Scenario: Add item to list
    Given that James has a todo list containing Buy some cookies, Walk the dog
    When he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk the dog, Buy some cereal

  Scenario: Remove item from list     
    Given that James has a todo list containing Buy some cookies, Walk the dog
    When he removes Buy some cookies from his list
    Then his todo list should contain Walk the dog