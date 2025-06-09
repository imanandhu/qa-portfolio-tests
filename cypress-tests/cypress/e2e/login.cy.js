
describe('Login Test', () => {
  it('logs in successfully', () => {
    cy.visit('https://example.com/login');
    cy.get('#username').type('testuser');
    cy.get('#password').type('password');
    cy.get('#loginButton').click();
    cy.get('#dashboard').should('be.visible');
  });
});
