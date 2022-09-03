Feature: Bettson 2 UI scenario

  Background: Navigation
    Given Go to the playwright website
  #First Scenario - Search and display
  Scenario: Search a line and addd the first line to BetSlip
    Given User search to Newcastle Line
    When Add the first line that appears in the search result to the lines
    Then User line should be display in BetSlip

  #Second Scenario - Add the line and calculate
  Scenario: Navigate to a line and add line to BetSlip
    Given Add the line in Sporstbook
    When Enter amount and calculate amount X odds
    Then Win should be amount X odds value