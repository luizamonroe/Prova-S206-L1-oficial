describe('visitar site', () => {
    it('entrar no site', () => {
        cy.visit("https://demoqa.com/");
        cy.get('.category-cards > :nth-child(1)').click();
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-0').click();
    })
})

describe('preencher text boxes', ()=>{
    it('preenchendo text boxes', () => {
        cy.on('uncaught:exception', ()=> {
            return false
        })
        cy.get("#userName").type("Luiza Monroe");
        cy.get('#userEmail').type("luizamonroe@live.com");
        cy.get("#currentAddress").type("Henrique Del Castilho, 85");
        cy.get("#permanentAddress").type("Dr. Omar Barbosa Lima, 15");
        cy.get("#submit").click();
        cy.get('.border').should("have.text", "Name:Luiza MonroeEmail:luizamonroe@live.comCurrent Address :Henrique Del Castilho, 85 Permananet Address :Dr. Omar Barbosa Lima, 15")
    })
})

describe('Preencher tabelas', () => {
    it('preenchendo tabelas', () => {
        cy.on('uncaught:exception', ()=> {
            return false
        })
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text').click();
        cy.get('#addNewRecordButton').click();
        cy.get('#firstName').type("Luiza");
        cy.get("#lastName").type("Monroe");
        cy.get('#userEmail').type("luizamonroe@live.com");
        cy.get('#age').type("25");
        cy.get('#salary').type("800");
        cy.get('#department').type("TI");
        cy.get('#submit').click()
        cy.get('#searchBox').type("Luiza");
        cy.get('.rt-tbody > :nth-child(1) > .rt-tr > :nth-child(1)').should("have.text", "Luiza")
    })
})
