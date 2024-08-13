Feature: Catfact :: GET /breeds

  # As an Catfact API consumer
  # i want to get cat breeds information

  Scenario: Cat breeds listing
    When the consumer sends a request to "GET /breeds"
    Then the API should respond: "200 OK"
    And the API should return only 25 cat breeds

  Scenario: Cat breed info
    When the consumer sends a request to "GET /breeds"
    Then the API should respond: "200 OK"
    And the API should return correct info about a breed

  Scenario: Data limitation - ?limit=<value>
    When the consumer sends a request to "GET /breeds" with:
      | ?limit=<value> |
    Then the API should respond: "200 OK"
    And the API should return only <value> cat breeds

    Examples:
      | value |
      | 5     |
      | 77    |

  Scenario: Max data length - ?limit=10000
    When the consumer sends a request to "GET /breeds" with:
      | ?limit=10000 |
    Then the API should respond: "200 OK"
    And the API should return only 98 cat breeds

  Scenario: Min data length - ?limit=0
    When the consumer sends a request to "GET /breeds" with:
      | ?limit=0 |
    Then the API should respond: "200 OK"
    And the API should return only 15 cat breeds

  Scenario: Invalid data length - ?limit=-2
    When the consumer sends a request to "GET /breeds" with:
      | ?limit=-5 |
    Then the API should respond: "404 Not Found"
    And the API should return a error
      | Not Found |
