class Footer{
    footerSections(){
        describe('Automation Test Store - Assertions and Footer Links', () => {
            beforeEach(() => {
                cy.visit('https://automationteststore.com/');
            });
        
            it('should verify the home page title', () => {
                cy.title().should('eq', 'A place to practice your automation skills!');
            });
        
            it('should verify search functionality', () => {
                cy.get('input[name="filter_keyword"]').type('Skincare');
                cy.get('button[title="Search"]').click();
                cy.get('.prdocutname').should('be.visible');
            });
        
            it('should verify the cart is empty initially', () => {
                cy.get('#cart .dropdown-toggle').click();
                cy.get('.empty_cart p').should('be.visible').and('contain', 'Your shopping cart is empty!');
            });
        
            it('should check all footer section links', () => {
                cy.get('footer .footerlinks a').each(($link) => {
                    cy.wrap($link).should('be.visible');
                    cy.wrap($link).invoke('attr', 'href').should('not.be.empty');
                });
            });
        });
        
    }

}export default Footer;