
describe('user that fills out a registration form', () => {

  describe('with all necessary information', () => {

    before(() => {
        cy.visit('/')
        cy.get('input[name=firstName]').type('shagufta')
        cy.get('input[name=email]').type('shagufta.batool8@gmail.com')
        cy.get('input[name=password]').type('password')
        cy.get('input[name=city]').type('stockholm')
        cy.get('input[id=submit-button]').click()
    
    });
    
    it('is expected to see a confirmation message', () => {
    
        cy.get('div[id=confirmation-message]').should('contain.text','thank you for signing up!')
        
    });
      
  }); 

  // Test block if user miss out one form field only.
  
  describe('with one fields missing', () => {

      before(() => {
        cy.visit('/')
        cy.get('input[name=firstName]').type('shagufta')
       // cy.get('input[name=email]').type('shagufta.batool8@gmail.com')
        cy.get('input[name=password]').type('password')
        cy.get('input[name=city]').type('stockholm')
        cy.get('input[id=submit-button]').click()
          
      });

    it('is expected to see an error message', () => {

        cy.get('div[id=confirmation-message]').should('contain.text','Email is required!')
    
        
    });
      
  });

// Test block if user leave out more form fields

  describe('with some fields missing', () => {

    before(() => {
      cy.visit('/')
      cy.get('input[name=firstName]').type('shagufta')
     // cy.get('input[name=email]').type('shagufta.batool8@gmail.com')
      cy.get('input[name=password]').type('password')
     // cy.get('input[name=city]').type('stockholm')
      cy.get('input[id=submit-button]').click()
        
    });

  it('is expected to see an error message', () => {

      cy.get('div[id=confirmation-message]').should('contain.text','Please fill out all the fields!')
      
  });
    
});

  
    
});