Feature: Users list :: Filters

  As an Matera ERP user
  with access to the "Consulta de usuários" page
  i want to see and filter the system users

  Background:
    Given the user is logged
    And the user access the "Consulta de usuários" page

  Scenario: Filtering by Person type
    Given the user selects "<type>" as filter
    When the user clicks on "Filtrar"
    Then the page should show all users with "<type>"

    Examples:
      | type      |
      | admin     |
      | operator  |
      | read-only |

  Scenario: Filtering by Name
    Given the user inserts a name as filter
    When the user clicks on "Filtrar"
    Then the page should show all users with this name

  Scenario: Filtering by E-mail
    Given the user inserts a e-mail as filter
    When the user clicks on "Filtrar"
    Then the page should show all users using this e-mail

  Scenario: Invalid e-mail
    Given the user inserts a e-mail as filter
      | materagmail.com |
    When the user clicks on "Filtrar"
    Then the page should not show any users
    And the page should show an Error:
      | O e-mail está incorreto! |

  Scenario: Not registered <filter>
    Given the user inserts a <filter> that is not used
    When the user clicks on "Filtrar"
    And the page should show a message:
      | Nenhum usuário foi encontrado. |

    Examples:
      | filter |
      | e-mail |
      | name   |

  Scenario: Without filters
    When the user clicks on "Filtrar"
    Then the page should show all users

  Scenario: Filtering the user himself
    Given the user selects his user "<type>" as filter
    And the user inserts his name as filter
    And the user inserts his e-mail as filter
    When the user clicks on "Filtrar"
    Then the page should show only one user
    And the user info should be correct

  Scenario: Clearing filters
    Given the user selects "admin" as filter
    And the user inserts a name as filter
    And the user insers a e-mail as filter
    When the user clicks on "Limpar filtros"
    Then the page should not show any users
    And the page should have all filter fields empty