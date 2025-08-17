// page objects para cadastro
class CadastroPage {
    elements = {
        usernameInput: () => cy.get(cadastroSel.username),
        emailInput: () => cy.get(cadastroSel.email),
        passwordInput: () => cy.get(cadastroSel.password),
        confirmPasswordInput: () => cy.get(cadastroSel.confirmPassword),
        submitButton: () => cy.get(cadastroSel.submitButton)
    }

    preencherFormulario(usuario) {
        this.elements.usernameInput().type(usuario.username);
        this.elements.emailInput().type(usuario.email);
        this.elements.passwordInput().type(usuario.password);
        this.elements.confirmPasswordInput().type(usuario.confirmPassword);
    }

    submeterFormulario() {
        this.elements.submitButton().click();
    }

    realizarCadastro(usuario) {
        this.preencherFormulario(usuario);
        this.submeterFormulario();
    }
}

export default CadastroPage;