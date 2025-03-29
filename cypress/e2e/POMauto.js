
import Login from "../support/POM_Framework/LoginAuto.js";
import Product from "../support/POM_Framework/Productfiltering.js";
import Addtocart from "../support/POM_Framework/Addtocart.js";
import Wishlist from "../support/POM_Framework/Wishlist.js";
import Navigation from "../support/POM_Framework/Navigation.cy.js";
import Checkout from "../support/POM_Framework/Checkout.js";
import Contactus from "../support/POM_Framework/Contactus.js";
import Footer from "../support/POM_Framework/Footer.js";
describe('To validate the Automation store website', () => {
    const loginPage = new Login();
    const productpage = new Product();
    const addtocartpage = new Addtocart();
    const wishlistpage = new Wishlist();
    const navigationpages = new Navigation();
    const checkoutpage = new Checkout();
    const contactuspage =new Contactus();
    const footerpage = new Footer();
    it('To verify the login functionality', () => {
        loginPage.loginFunction();
       
    })
    it('To validate the functionality of product page', () => {
        productpage.productFunction();
    });
    it('To validate the Functionality of Add to cart', () => {
        addtocartpage.addToCart();
        
    });
    it("To validate the wishlist page ",()=>{
        wishlistpage.wishlistFunction();
    })
    it ('To validate to the different pages',()=>{
        navigationpages.navigationDifferentpages();

    })
    it('To validate the Checkoutpage',()=>{
        checkoutpage.checkoutFunction();
    })
    it('To Validate the functionality of contact us ',()=>{
        contactuspage.ContactusFunction();
    })
    it('To validate the functionality of footer',()=>{
        footerpage.footerSections();

    })
});