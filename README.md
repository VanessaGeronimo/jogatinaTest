# Jogatina Test Case

Caso de teste automatizado para o site [jogatina](https://www.jogatina.com/).

Este caso de teste cobre o login completamente e parcialmente o jogo [dominó](https://www.jogatina.com/site/play/game/bundle/DOMINO) fazendo teste do canvas onde o jogo é implementado verificando a compatibilidade através de *screenshoot* do elemento.

Para descrever os cenários de teste foi utilizado a syntax [gherkin](https://cucumber.io/docs/gherkin/reference/) visando promover o entendimento tanto da area técnica como da area de negócios.

Para automatizar utilizamos o [cypress](https://docs.cypress.io/) aliado ao plugin [cypress-plugin-snapshots](https://github.com/meinaart/cypress-plugin-snapshots#cypress-plugin-snapshots) para testar o canvas do jogo dominó.

## Executando os Testes

Para executar os testes basta seguir os passos

1. Clonar o repositório
    ```bash
        git clone https://github.com/VanessaGeronimo/jogatinaTest.git
    ```
2. Instalar dependências
    ```bash
        npm install
    ```
3. Abrir o cypress
    ```bash
        npm run cypress:open
    ```
4. Executar um teste de cada vez
    >O plugin utilizado para testar o canvas através de screenshots tem uma [issue](https://github.com/cypress-io/cypress/issues/3090) aberta que falha ao executarmos todos os testes juntos, por isso é necessário executar um teste por vez para que os testes sejam efetivos

## Bug Reports

O report de bugs encontrados foram escritos em *MarkDown* e estão diponiveis em [bug_reports](bug_reports/bug_reports.md)