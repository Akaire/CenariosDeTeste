// cypress/e2e/cadastro.cy.js
import cadastroSel from '../support/selectors/cadastro/cadastrosel';


describe('Testes de cadastro', () => {

    // Teste de cadastro simples, caminho feliz
    it('Teste deve realizar um cadastro', () => {
        cy.fixture('cadastrofix').then((cadastro) => {
        cy.get(cadastroSel.username).type(cadastro.username);
        cy.get(cadastroSel.email).type(cadastro.email);
        cy.get(cadastroSel.password).type(cadastro.password);
        cy.get(cadastroSel.confirmPassword).type(cadastro.confirmPassword);
        cy.get(cadastroSel.submitButton).click();
  })
  })

    // Testes adicionais de cadastro
    // Ja que estou testando com um website imaginário, não farei a validação do toast de sucesso
    it('Teste deve realizar um cadastro com email invalido', () => {
        cy.fixture('cadastrofix').then((cadastro) => {
            cy.get(cadastroSel.username).type(cadastro.username);
            cy.get(cadastroSel.email).type(cadastro.emailinvalid);
            cy.get(cadastroSel.password).type(cadastro.password);
            cy.get(cadastroSel.confirmPassword).type(cadastro.confirmPassword);
            cy.get(cadastroSel.submitButton).click();
        })
    })

    it('Teste deve realizar um cadastro com senha invalida', () => {
        cy.fixture('cadastrofix').then((cadastro) => {
            cy.get(cadastroSel.username).type(cadastro.username);
            cy.get(cadastroSel.email).type(cadastro.email);
            cy.get(cadastroSel.password).type(cadastro.invalidpassword);
            cy.get(cadastroSel.confirmPassword).type(cadastro.invalidpassword);
            cy.get(cadastroSel.submitButton).click();
        })
    })
  



})