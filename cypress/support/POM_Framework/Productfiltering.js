class Product{
    productFunction(){
        cy.visit("https://automationteststore.com/");
        cy.get('[id="filter_keyword"]').should('have.text','shirt').and('be.visible');
        cy.get('[class="thumbnail"]').should('have.length','8');
        cy.xpath('//a[@data-id="121"][1]').click();
        cy.get('select').select('Light Blue  (995731 In Stock)').should('have.value','Light Blue  (995731 In Stock)');
        cy.get('select').select('Small  Out of Stock').should('have.value','Small  Out of Stock');
        //cy.get('[id="product_quantity"]').should('have.text','5');
        cy.contains('$160.00').should('be.visible');
        // cy.get('[class="cart"]').click();


        
    }

}export default Product;