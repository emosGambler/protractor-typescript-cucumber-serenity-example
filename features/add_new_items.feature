Feature: Add new items to the todo list

  In order to avoid having to remember things that need doing
  As a forgetful person
  I want to be able to record what I need to do in a place where I won't forget about them

  Scenario: Working with items on a todo list

    Given that James has a todo list containing Buy some cookies, Walk the dog
    When he adds Buy some cereal to his list
    Then his todo list should contain Buy some cookies, Walk the dog, Buy some cereal
     
    When he removes Buy some cookies from his list
    Then his todo list should contain Walk the dog, Buy some cereal

    When he marks Walk the dog as done
    Then his todo list contains of 1 item left