describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    // cy.get('#checkBoxOption1').check()
    //handling checkboxes
    // cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1') //for behavior we use be.check
    // cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    // cy.get('input[type= "checkbox"]').check(['option2','option3'])

    // //static Dropdown

    // // cy.get('#dropdown-class-example').select("option2")
    // cy.get('select').select('Option2').should('have.value', 'option2')
    
    // //dynamic Dropdowns
    // cy.get('#autocomplete').type('ind')
    // cy.get('.ui-menu-item div').each(($e1 , index , $list) =>{
    //   if($e1.text() ==="India")
    //   {
    //     $e1.click()
    //   }
    //   cy.get('#autocomplete').should('have.value' , "India")

      // visibility and invisibility of elements 

      // cy.get('#displayed-text').should('be.visible')
      // cy.get('#hide-textbox').click()
      // cy.get('#displayed-text').should('not.be.visible')
      // // wait(2000)
      // cy.get('#show-textbox').click()
      // cy.get('#displayed-text').should('be.visible')

      // // Radio buttons

      // cy.get('[value = "radio2"]').check().should('be.checked')

      // Popups

      // cy.get('#alertbtn').click()
      // cy.get('#confirmbtn').click()

      //handling child tabs

      // removeAttr is jquery funcion ,it removes sre "target " eement from DOM
     

      // cy.get('#opentab').invoke('removeAttr' , 'target').click()

       // when domain is chaged the how to handle that
      // cy.origin("https://www.qaclickacademy.com/" ,()=>
      // {
      //   cy.get("#navbarSupportedContent a[href='about.html']").click()
      // })
    
  
      //handling mouse hover using .show() method of jquery,no direct support

      cy.get('.mouse-hover-content').invoke('show')
      // cy.contains('Top').click()
      cy.get('[href="#top"]').click()
      // cy.url().should('include','top')


 
  })
})