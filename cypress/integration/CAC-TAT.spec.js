/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    this.beforeEach(function() {
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        cy.visit('./src/index.html')

        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })


    it('preenche os campos obrigatórios e envia o formulário', function(){
        const longText = 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste'
        cy.get('#firstName').type('Pedro')
        cy.get('#lastName').type('Felix')
        cy.get('#email').type('pedro.felix08@gmail.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')

    })
       
      it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        cy.get('#firstName').type('Pedro')
        cy.get('#lastName').type('Felix')
        cy.get('#email').type('pedro.felix08%gmail,com')
        cy.get('#phone'.type('929999999s'))
        cy.get('#open-text-area').type('Teste')
        cy.get('button[type="submit"]').click()

        cy.get('.error').should('be.visible')

      })

      it.only('campo telefone continua vazio quando preenchido com valor não-numérico', function(){
        cy.get('#phone')
            .type('kjhdfasdkjfhsduij')
            .should('have.value', '')


      })
    
  }) 




// teste abaixo do meu site de loja de roupas

// describe('Central de Atendimento ao Cliente TAT', function() {
//     it('verifica o título da aplicação', function() {
//             cy.visit('https://grifechic.my.canva.site/chicgrife')

//             cy.title().should('be.equal', 'Catálogo loja grife Chic')


//     })
// })