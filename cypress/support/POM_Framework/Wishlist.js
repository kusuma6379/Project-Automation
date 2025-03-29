class Wishlist{
    wishlistFunction(){
        it('To validate the wishlist functionality ', () => {
            cy.visit('https://automationteststore.com/');
            cy.xpath('//a[@href="https://automationteststore.com/index.php?rt=account/wishlist"]').should('have.length','3').and('be.visible').click();
            cy.get('class="maintext"').should('be.visible');
            
        });
        it('To validate the table of wishlist ', () => {
            cy.visit('https://automationteststore.com/');
            cy.get('table tbody tr').each(($row)=>{
                cy.wrap($row).should(be.visible);

        })
        it('To validate vewcart checkout function', () => {
            cy.get('[id="cart_update"]').click();
            cy.get('id="cart_checkout1"').should(be.visible).click();
            cy.get('[id="checkout_btn"]').click();

            
        });



        });
    }
        
    
}export default Wishlist;