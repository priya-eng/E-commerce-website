describe('ecommerce_website', ()=>{ 
    
    

      it('adding the elements into cart',()=>{


        cy.visit('http://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()

        cy.url().should('include', 'inventory.html')

        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('.shopping_cart_badge').then(($item)=>{

        const cartValue = parseInt($item.text())
        expect(cartValue).to.eq(2)
                  
        })

        cy.get('.inventory_item_name').contains('Sauce Labs Backpack').should('contain','Sauce Labs Backpack')
        cy.get('.inventory_item_name').contains('Sauce Labs Bike Light').should('contain','Sauce Labs Bike Light')

        cy.get('.shopping_cart_link').click()

        cy.url().should('include','cart.html')

        cy.get('#checkout').click()
        cy.get('#first-name').type('priya').should('have.value', 'priya')
        cy.get('#last-name').type('pandey').should('have.value', 'pandey')
        cy.get('#postal-code').type('211008')
        cy.get('#continue').click()

        cy.url().should('include','checkout-step-two.html')

    //     cy.get('.summary_subtotal_label').then (($amt)=>{

    //       const totAmt = parseInt($amt.text())
          
        

    //     cy.get('.summary_tax_label').then (($tax)=>{

    //       const totTax = parseInt($tax.text())
          
        

    //     cy.get('.summary_total_label').then (($total)=>{
    //       const Total = parseInt($total.text())
          
    //       const Total1= totAmt+totTax
    //       expect(Total1).to.eq(Total)
    //     })
    //   })
    // })
        
        

      
        cy.get('#finish').click()
        cy.get('.complete-header').contains('THANK YOU FOR YOUR ORDER')
        



      })

})