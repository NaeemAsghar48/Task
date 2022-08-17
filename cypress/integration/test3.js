/// <reference types = "cypress" />
/// <reference types = "cypress-iframe"/>
import "cypress-iframe";

describe("My First Test", () => {
  it("frames", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.get("a[href='/frames']").click();
    cy.url().should("include", "frames");
    cy.get("a[href='/iframe']").click();
    const iframe = cy
      .get("#mce_0_ifr")
      .its("0.contentDocument.body")
      .should("be.visible")
      .then(cy.wrap);
    iframe.clear().type("helo World!");
  });
});
