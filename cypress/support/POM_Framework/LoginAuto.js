class Login{
    loginFunction(){
        //cy.visit("https://automationteststore.com/index.php?rt=account/login");
        it('To validate the valid Login functionality', () => {
        cy.visit("https://automationteststore.com/index.php?rt=account/login");
        cy.get('[id="loginFrm_loginname"]').type('username');
        cy.get('[id="loginFrm_password"]').type('password');
        cy.get('[title="Continue"]').click();
        cy.wait(3000);
        cy.contains('My Account').should('be.visible');    
        });
        it('To validate the invalid credentials', () => {
            cy.visit("https://automationteststore.com/index.php?rt=account/login");
            cy.get('[id="loginFrm_loginname"]').type('invalidusername');
            cy.get('[id="loginFrm_password"]').type('password');
            cy.get('[title="Continue"]').click();
            cy.wait(3000);
            cy.contains('Error: Incorrect login or password provided').should('be.visible');
        });
        it('To validate the emty credentials', () => {
            cy.visit("https://automationteststore.com/index.php?rt=account/login");
            cy.get('[title="Continue"]').click();
            cy.contains('Error: Incorrect login or password provided.').should('be.visible');
            cy.contains('Error: You must enter a login name').should('not.be.visible');
            cy.wait(3000);
            cy.contains('Error: Password is required').should('not.be.visible');
            
        });

    }   
}export default Login;