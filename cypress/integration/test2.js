/// <reference types = "cypress" />

describe("My First Test", () => {
  it("Form Authentication", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("a[href='/login']").click();
    cy.url().should("include", "login");
    cy.get("#username").type("tomsmith");
    cy.get("#password").type("SuperSecretPassword!");
    cy.get(".fa.fa-2x.fa-sign-in").click();
    cy.url().should("include", "secure");
    cy.get("#flash").then(function (element) {
      const actualtext = element.text();
      expect(actualtext.includes("secure")).to.be.true;
    });
    cy.get(".icon-2x.icon-signout").click();
    cy.url().should("include", "login");
    cy.get(".flash.success").then(function (element) {
      const actualtext = element.text();
      expect(actualtext.includes("logged out ")).to.be.true;
    });
  });
});
