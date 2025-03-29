class Navigation{
    navigationDifferentpages(){
        describe('Automation Test Store Navigation Test', () => {
            beforeEach(() => {
              cy.visit('https://automationteststore.com/');
            });
          
            it('should navigate between different pages', () => {
              // Navigate to the Login page
              cy.contains('Login or register').click();
              cy.url().should('include', 'account/login');

              //wlcome back page
              cy.contains('Welcome back Madavali').click();
              cy.url().should('include','index.php?rt=account/account');

              //Naviagate to the special page
              cy.contains('Specials').click();
              cy.url().should('index.php?rt=product/special').should('be.visible');
              
              //Navigate to the Accountpage
              cy.contails('Account').click();
              cy.url().should('include','index.php?rt=account/account');

              //Navigate to the Cart page
              cy.contains('Cart').click();
              cy.url().should('include','index.php?rt=checkout/cart');

              //Navigate to the Checkout page
              cy.contains('Checkout').click();
              cy.url().should('index.php?rt=checkout/cart').should('be.visible')

              //Navigate to the Home page 
              cy.contains('Home').click();
              cy.url().should('eq','automationteststore.com').should('be.visible');

              // Navigate to the Contact Us page
              cy.contains('Contact Us').click();
              cy.url().should('include', 'contact')

            })
        })
    }
}export default Navigation;