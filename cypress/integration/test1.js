/// <reference types = "cypress" />

describe("My First Test", () => {
  it("Checkbox!", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("a[href='/checkboxes']").click();
    cy.url().should("include", "checkboxes");
    cy.get('[checked=""]').uncheck().should("not.be.checked");
  });
});
