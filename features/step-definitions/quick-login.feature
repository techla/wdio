Feature: POC Quick Login

  Scenario Outline: As a user with a booking ID, I can log into the CC

    Given I am on the home page
    Given The bookingId 495048290 for the user Onee bookingOnee
    When I go quick login
    Then I should access the CC
