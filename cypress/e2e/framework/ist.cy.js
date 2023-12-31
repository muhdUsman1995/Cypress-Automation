describe('lets check framwork section' , function()
{
    before(function(){

    })


    it('My test case',function()
    {
        cy.visit('https://rahulshettyacademy.com/angularpractice/shop')
        // cy.get('form input.form-control:nth-child(1)').type("usman")

        // cy.get(':nth-child(1) > .form-control').type('usman')
        cy.get('input[class="form-control ng-pristine ng-invalid ng-touched"]').type("usman")
        
        // cy.get('#exampleFormControlSelect1').click()
        

        cy.get('select').select("Female")
        

    })






})