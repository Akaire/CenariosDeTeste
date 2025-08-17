import CadastroPage from "../support/pgObj/cadastroPG";

describe('Testes de cadastro', () => {
    const cadastroPage = new CadastroPage();

    // Teste de cadastro simples, caminho feliz
    it('Teste deve realizar um cadastro', () => {
        cy.fixture('cadastrofix').then((cadastro) => {
        cadastroPage.realizarCadastro({
            username: cadastro.username,
            email: cadastro.email,
            password: cadastro.password,
            confirmPassword: cadastro.confirmPassword
            });
        });
    });

    // Teste com email inválido
    it('Teste deve realizar um cadastro com email invalido', () => {
        cy.fixture('cadastrofix').then((cadastro) => {
        cadastroPage.realizarCadastro({
            username: cadastro.username,
            email: cadastro.emailinvalid,
            password: cadastro.password,
            confirmPassword: cadastro.confirmPassword
            });
        });
    });

    // Teste com senha inválida
    it('Teste deve realizar um cadastro com senha invalida', () => {
        cy.fixture('cadastrofix').then((cadastro) => {
        cadastroPage.realizarCadastro({
            username: cadastro.username,
            email: cadastro.email,
            password: cadastro.invalidpassword,
            confirmPassword: cadastro.invalidpassword
            });
        });
    });
});