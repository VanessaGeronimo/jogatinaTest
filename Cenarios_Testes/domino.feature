Feature: Dominó

    Scenario: Jogar Agora
        Given Que estou logado
        When Clico no botão jogar agora na div dominó
        Then Deve carregar a tela inicial do jogo

    Scenario: Jogar com Pessoas
        Given Que estou logado
        When Clico no botão jogar com pessoas na div dominó
        Then Deve carregar a tela inicial do jogo

    Scenario: Seleção de 2 Jogadores
        Given Estou na tela do Jogo
        And O botão domino clássico esta na tela
        When Clico em dominó clássico esta domino clássico
        Then Deve aparecer aparecer a opção 2 Jogadores
        And A opção 4 jogadores
        When Clico em 2 jogadores
        Then Deve começar o jogo

    Scenario: Seleção de 4 Jogadores
        Given Estou na tela do Jogo
        And O botáo domino clássico esta na tela
        When Clico em domino clássico esta domino clássico
        Then Deve aparecer aparecer a opção 2 Jogadores
        And A opção 4 jogadores
        When Clico em 4 jogadores
        Then Deve começar o jogo

    Scenario: Inicio do Jogo
        Given O jogo começa
        When O robô insere a primeira peça
        And O usuário insere a segunda peça
        Then As peças devem ser compatíveis para que o jogo continue

    Scenario: peças incompativeis
        Given Não tenho nenhuma peça compatível
        Then A janela de compras deve aparecer


    Scenario: Fim do Jogo
        Given Que acabou o Jogo
        When  O botão continuar aparece
        And Clico no botão continuar
        Then  O jogo deve prosseguir