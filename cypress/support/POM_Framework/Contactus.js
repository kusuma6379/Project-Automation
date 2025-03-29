class Contactus{
    ContactusFunction(){
        describe('To validate the functionality of contact us ', () => {
            beforeEach('To verify the contact us', () => {
                cy.visit('https://automationteststore.com/index.php?rt=content/contact');
                
            });
            it('To validate the functionality of contact us ', () => {
                cy.contains('Contact Us').click();
                cy.get('[class="maintext"]').should('be.visible');
                cy.contains('Address:').should('have.text','Address:').and('be.visible');
                cy.contains('Telephone:').should('have.text','Telephone:').and('be.visible');
                cy.get('[id="ContactUsFrm_first_name"]').type('Valid First name');
                cy.get('[id="ContactUsFrm_email"]').type('Valid Email');
                cy.get('[id="ContactUsFrm_enquiry"]').type('Enquiry');
                cy.get('[title="Submit"]').click();
                cy.contains('success').should("be.visible");
                cy.url().should('include','dashboard');

            });
            it('To validatee the invalid credentials ', () => {
                cy.get('[id="ContactUsFrm_first_name"]').type('Valid First name');
                cy.get('[id="ContactUsFrm_email"]').type('InValid Email');
                cy.get('[id="ContactUsFrm_enquiry"]').type('Enquiry');
                cy.get('[title="Submit"]').click();
                cy.contains('E-Mail Address does not appear to be valid!').should("be.visible");
                
            });
            it('To validatee the Emty credentials ', () => {
                cy.get('[id="ContactUsFrm_first_name"]').type('Emty Firstname');
                cy.get('[id="ContactUsFrm_email"]').type('Emty email');
                cy.get('[id="ContactUsFrm_enquiry"]').type('Empty Enquiry');
                cy.get('[title="Submit"]').click();
                cy.contains('First name: is required field! Name must be between 3 and 32 characters!,Email: is required field! E-Mail Address does not appear to be valid!,Enquiry: is required field! Enquiry must be between 10 and 3000 characters!').should("be.visible");
                
            });
        });
    }
}export default Contactus;