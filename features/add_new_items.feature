Feature: Add new items to the todo list

  In order to avoid having to remember things that need doing
  As a forgetful person
  I want to be able to record what I need to do in a place where I won't forget about them

  Scenario Outline: Working with items on a todo list

    Given that James has a todo list containing Walk the dog
    When he adds <product> to his list
    Then his todo list should contain Walk the dog, <product>

    When he removes Walk the dog from his list
    When he removes <product> from his list

    Examples:
      | product         |
      | Buy some cereal |
      | Fix the bug     |
      | Meditate        |
    