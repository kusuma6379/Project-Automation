class Checkout {
    checkoutFunction(){
        describe('To validate the functionality of checkout box ', () => {
            beforeEach('To validate the url', () => {
                cy.visit("https://automationteststore.com/")    
            });
            it('To validate the checkout box ', () => {
                cy.contains('Checkout').click();
                cy.get('[class="breadcrumb"]').click();
                cy.get('[class="pricetag jumbotron"]').should('have.length',8).click();
                cy.get('[class="cart"]').click();
                cy.get('tbale tbody tr',($row)=>{
                    cy.wrap($row).should('be.visible');
                })
                cy.get('[id="cart_checkout1"]').should('be.visible').click();
                cy.get('class="maintext"').should('have.text',' Checkout Confirmation');
                cy.get('[id="checkout_btn"]').should('be.visible').click();
                cy.url().should('inlude','dashboard').and('eq','automationteststore.com');
                cy.contains('Order success').should('be.visible');

                
                
            });
        });
    }
}export default Checkout;