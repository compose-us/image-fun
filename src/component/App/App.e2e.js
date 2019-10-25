describe("App", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("shows hints on 'h' keypress", () => {
    cy.get("body")
      .should("not.contain", "It has something to do with")
      .type("h")
      .should("contain", "It has something to do with")
      .type("h")
      .should("not.contain", "It has something to do with");
  });
});

export {};
