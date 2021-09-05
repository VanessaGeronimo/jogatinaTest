/// <reference types= 'cypress' />

describe("Teste de Login", () => {
  it("logar com sucesso", () => {

    const fakeUser = {
      email: "vanessageronimo46@gmail.com",
      pass: "v4n3ss@",
    };

    cy.visit("/")
      .get("a.header__btn-login")
      .click()
      .get("#email-login")
      .type(fakeUser.email)
      .should("have.value", fakeUser.email)
      .get("#senha-login")
      .type(fakeUser.pass)
      .should("have.value", fakeUser.pass)
      .get("input.btn-entrar")
      .click()
      .url()
      .should("include", "/welcome.do");
  });
  it("logar com insucesso", () => {

    const fakeUser = {
      email: "vanessageronimo46@gmail.com",
      pass: "ooooo",
    };

    cy.visit("/")
      .get("a.header__btn-login")
      .click()
      .get("#email-login")
      .type(fakeUser.email)
      .should("have.value", fakeUser.email)
      .get("#senha-login")
      .type(fakeUser.pass)
      .should("have.value", fakeUser.pass)
      .get("input.btn-entrar")
      .click()
      .get('div.alerta-erro')
      .contains('Email ou senha incorretos. Por favor, tente novamente.')

  });
  it("Campo Email preenchido errado", () => {

    const fakeUser = {
      email: "vanessageronimo00@gmail.com",
      pass: "ooooo",
    };

    cy.visit("/")
      .get("a.header__btn-login")
      .click()
      .get("#email-login")
      .type(fakeUser.email)
      .should("have.value", fakeUser.email)
      .get("#senha-login")
      .type(fakeUser.pass)
      .should("have.value", fakeUser.pass)
      .get("input.btn-entrar")
      .click()
      .get('div.alerta-erro')
      .contains('Email ou senha incorretos. Por favor, tente novamente.')

  });

  it("Inserir dados inválidos no campo email e senha", () => {

    const fakeUser = {
      email: "vanessageronimo46gmail",
      pass: "f",
    };

    cy.visit("/")
      .get("a.header__btn-login")
      .click()
      .get("#email-login")
      .type(fakeUser.email)
      .should("have.value", fakeUser.email)
      .get("#senha-login")
      .type(fakeUser.pass)
      .should("have.value", fakeUser.pass)
      .get("input.btn-entrar")
      .click()
      .get('#email-login-error')
      .contains('Forneça um e-mail válido.')

  });



});

