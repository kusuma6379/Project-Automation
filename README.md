# ⚙️***Automation Test Store  Demo Website - End-to-End Testing Project***-
![Screenshot 2025-03-24 110255]()
<br>
URL:- [Automation Test Store](https://opensource-demo.orangehrmlive.com/web/index.php/auth/login)

### 📌 ***Overview***

This project focuses on end-to-end testing of the Automation Test Store demo website, covering both manual testing and Cypress automation. The objective is to ensure the website functions as expected across various modules, providing a smooth and reliable user experience.

### 🎯 ***Objective***

- Validate core functionalities of the Automation Test Store demo website
- Perform manual testing to ensure feature completeness and user flow accuracy
- Implement Cypress automation to improve test efficiency and reusability

### 🔑 ***Key Deliverables***

- Comprehensive Test Plan Document
- Detailed Test Scenarios & Test Cases
- Thorough Bug Reports and Bug Summary Report
- Cypress Automation Framework with Page Object Model (POM)
- Test Execution Report (Manual & Automation)
- Final Test Summary Report

### 🛠️ ***Tools & Technologies Used***

- Manual Testing Tools:
   -  Jira
   -  Zephyr
   -  Xmind Map

- Automation Testing Tools:
    - Cypress
    - Visual Studio Code

- Languages:
    - JavaScript
    - HTML
    - CSS

- Framework Design:
    - Page Object Model (POM)
  ---

## 🕵️ MANUAL TESTING:

### 🔹 ***1. Test Plan***

  - Outlined strategy covering:
      - Scope
      - Approach
      - Resources
      - Timelines

### 🔹 ***2. Xmind Map Test Plan***

  - Created a visual, hierarchical breakdown of:
      - Testing objectives
      - Module breakdown

### 🔹 ***3. Requirement Traceability Matrix (RTM)***

  - Mapped:
    - Test cases to requirements
    - Ensured complete coverage

### 🔹 ***4. Test Scenarios & Test Cases***

  - Designed high-level scenarios covering:
    - Login functionality/Signup
    -Product search and filtering
    -Add products to the cart ,change quantity and apply some filters.
    -Wishlist
    -Navigating between different pages
    -Checkout
    -Contact us
    -Also Check for footer  sections links

- Detailed test cases include:
    - Clear steps
    - Expected results
    - Postconditions

### 🔹 ***5. Bug Report***

- Documented defects with:
    - Steps to reproduce
    - Severity
    - Environment details
    - Screenshots

### 🔹 ***6. Bug Summary Report***

- Included:
    - Total test cases
    - Defects by severity
    - Module-level pass/fail status
 
### 📘 ***Documents***
1. [Test Plan](https://docs.google.com/document/d/1rRD0PfCsO85cUN0X_FCaQ3RYvbSfG7hk9luNNFTCG_4/edit?tab=t.0)
2. [Test Plan- X-MindMap](https://docs.google.com/document/d/1judVW-Zq0tRpceqPUBsAID_43peCXq5BpgCkLNPMLEg/edit?tab=t.0)
3. [Test Scenarios and Tets Cases](https://docs.google.com/spreadsheets/d/1kglHMJ70QSxZpr8PmGXR87dwx6hLf8riR7NMYuIymxI/edit?gid=1135018006#gid=1135018006)
4. [Bug Report](
---

## 🤖 ***AUTOMATION TESTING***

### ⚙️ ***Cypress Automation Setup***

- 🔹 Tech Stack
      - Cypress
      - JavaScript
      - Node.js

### 🔹 ***Installation Steps***

1. Install dependencies:
     - Node modules
     
     ```npm init -y```
   
    - Cypress installation
  
    ```npm install cypress --save-dev```

3. Run Cypress UI mode:
   
    ```npx cypress open```

4. Run Cypress headless mode:

    ```npx cypress run```


### 🛠️ ***Project Structure***

    📂 OrangeHRM-Cypress-Project
      │
      ├── 📁 cypress
      │   ├── 📁 e2e
      │   │   └── POMauto.js
      │   │
      │   ├── 📁 support
      │   │   ├── commands.js
      │   │   └── e2e.js
      │   │
      │   └── 📁 POM_Framework
      │       ├── Addtocart.js
      │       ├── Checkout.js
      │       ├── Contactus.js
      │       ├── Footer.js
      │       ├── LoginAuto.js
      │       ├── Navigation.js
      │       └── Productfiltering .js
      │
      └── cypress.config.js

### 🔹 ***Explanation***
  - e2e:
     - Contains end-to-end test scripts
  - pageObjects:
    - Holds reusable classes representing web pages
  - support:
      - Custom commands and reusable functions
     
  ### 🔥 ***Test Execution***
  
-  Manual: Conducted step-by-step validation, recorded results.
-  Automation: Ran Cypress tests using npx cypress run.
-  Test Reports: Cypress automatically generated test execution reports.

### 🔥 ***Key Cypress Features Implemented***

- Locators:
    - get(), contains(), and custom selectors
- Assertions:
    - BDD-style (should())
- Custom Commands:
    - Reusable login and navigation functions
- Hooks:
    - Managed test setup and teardown with before(), beforeEach(), after()
- Page Object Model:
    - Separated UI locators from test logic

### ⏳ ***Challenges Faced***

- Dynamic Elements:
    - Resolved by implementing more reliable selectors
- Authentication Handling:
    - Created reusable login commands
 
### 🏅 ***Conclusion***

The project successfully validated core functionalities of the Automation Test Store site. The manual testing phase ensured all features worked as intended, while the Cypress automation framework improved testing speed, consistency, and reusability.

### 📌 ***References***

- [📘 Cypress Documentation](https://www.cypress.io/)
- [🌍 Automation Test Store Site](https://automationteststore.com/)
- [🐱 GitHub Guidence](https://github.com/kusuma6379/Project-Automation)

### 👩‍💻 ***Author***
Madavali Kusuma
Contact Me- [E-MailId](kusumababu6379@gmail.com)

### 🌟 ***About Me***
I am an aspiring and dedicated Quality Assurance professional with a strong foundation in manual and automation testing. Passionate about ensuring software reliability and user satisfaction, I specialize in creating comprehensive test strategies, scenarios, and automation frameworks. My expertise in Cypress, JavaScript, and testing methodologies empowers me to deliver high-quality, maintainable test solutions. I am committed to continuous learning and improving testing processes for better software experiences.

### 🏁 ***Approvals***

| Approver | Role | Date |
| -------- | -------- | -------- |
| Shiva kumar sir | Project Manger|  24-03-2025 |
| Anjali ma'am   | Project Lead  |  24-03-2025 |

 









  
