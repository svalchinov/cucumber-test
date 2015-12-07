Feature: Example feature

  Background:
    Given I go on the website "http://localhost:8080"

  Scenario: Get title of website
    Then the title of the page is "Page title"
