describe('My 2nd Test', () => {
  it('passes', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('.search-keyword').type("ca")
    cy.get(".product:visible").should("have.length",4)//jquery selector :visible
    cy.wait(3000)

    cy.get(".products").as('productlocator') //aliasing
    cy.get("@productlocator").find('.product').each((productelement ,number,productlist) =>{
      const textveg = productelement.find("h4.product-name").text()
      if(textveg .includes('Cashews'))
      {
        cy.wrap(productelement).find('button').click()
      }
    })
    cy.get('.cart-icon > img').click()
    cy.contains("PROCEED TO CHECKOUT").click()
    cy.contains("Place Order").click()

  })
})