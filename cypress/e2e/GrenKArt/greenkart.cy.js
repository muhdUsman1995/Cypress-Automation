describe('GreenKart', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type("ca")
    cy.get(".product:visible").should("have.length",4)//jquery selector :visible
    cy.wait(3000)

    // parent child chaining

    //using alias, replaces .product with productlocator 

    cy.get(".products").as('productlocator') //aliasing

    cy.get("@productlocator").find('.product').should('have.length',4)
    // here .products is aprenet and .product is child 
    cy.get("@productlocator").find('.product').eq(2).contains("ADD TO CART").click()
// parent chuld chaing end here 

//iterating through an array

    cy.get("@productlocator").find('.product').each((productelement ,number,productlist) =>{
      const textveg = productelement.find("h4.product-name").text()
      if(textveg .includes('Cashews'))
      {
        cy.wrap(productelement).find('button').click()
      }
    })
    //assertion to check the text
    cy.get('.brand').should('have.text' , "GREENKART")
    cy.get('.brand').then(function(logoelement){
      cy.log(logoelement.text())
    })
    const logo = cy.get('.brand')

  })
})