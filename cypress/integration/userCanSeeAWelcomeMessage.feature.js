


describe ("user that navigates to the application", ()=>{

   before(()=>{

    cy.visit('/')
   })

    it('is expected to see "hello world"', ()=>{

        

    cy.get('h1').should('contain.text', 'My First Test')

            
    })
 
});


