class Addtocart{
    addToCart(){
        cy.visit('https://automationteststore.com/')
        cy.get('select').select('Light Blue  (995731 In Stock)').should('have.value','Light Blue  (995731 In Stock)');
        cy.get('select').select('Small  Out of Stock').should('have.value','Small  Out of Stock');
        cy.get('[id="product_quantity"]').should('have.text','5');
        cy.get('[class="cart"]').click();

    }
}export default Addtocart;