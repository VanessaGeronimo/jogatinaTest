Feature: Login

Scenario: Login com sucesso
    Given  Acesso a tela de login
    Then Deve constar o campo 'Email'
    And o campo 'Senha'
    And o botão 'Enviar'
    When Insiro o email
    And Insiro a senha
    Then Esses campos devem permanecer preenchidos
    When Clico no botão 'Enviar'
    Then Deve logar com sucesso

Scenario: Login com senha inválida
    Given Que acesso a tela de login
    And Digito o email
    And Insiro a senha incorreta
    When Clico no botão enviar
    Then Deve aparacer a mensagem de erro 'Email ou senha incorretos. Por favor, tente novamente'

Scenario: Login com email inválido
    Given Que acesso a tela de login
    When Digito o email incorreto
    Then  A mensagem 'Forneça um e-mail válido' deve aparecer debaixo do campo email