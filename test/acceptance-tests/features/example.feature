Feature: Example feature
As a user of webdriverjs
I should be able to use different commands
to get informations about elements on the page

  Background:
    Given I go on the website "https://google.com/"

  Scenario: Get title of website
    When I use getTitle() to get the title of this website
    Then the command should return ""
