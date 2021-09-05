describe("Test Domino", () => {
  it("play domino", () => {
    const fakeUser = {
      email: "vanessageronimo46@gmail.com",
      pass: "v4n3ss@",
    };

    cy.visit("/")
      .get("#email-login")
      .type(fakeUser.email, { force: true })
      .get("#senha-login")
      .type(fakeUser.pass, { force: true })
      .get("form.header__box-login-form")
      .submit();

    cy.visit("/site/play/game/bundle/DOMINO")
      .get("canvas")
      .wait(4000)
      .toMatchImageSnapshot();
  });
});
