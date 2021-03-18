Feature: POC Full Login

  Scenario Outline: As a GM, I can log into the CC

    Given I am on the home page
    Given The GMID 17358784 with password PASSWORD
    When I go full login
    Then I should access the CC