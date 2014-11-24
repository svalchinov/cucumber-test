Feature: Example feature
As a user of webdriverjs
I should be able to use different commands
to get informations about elements on the page

  Background:
    Given I go on the website "https://github.com/"

  Scenario: Get title of website
    When I use getTitle() to get the title of this website
    Then the command should return "GitHub · Build software better, together."

  Scenario: Save a screenshot
    When I try to save a screenshot
    Then the command should capture a screenshot

