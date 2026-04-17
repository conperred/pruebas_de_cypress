describe('pruebas de la pagina TODO', () => {
  it('comprobar que se pueden crear tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist')
    cy.get('[data-testid="text-input"]') .type("sacar al perro{enter}")
})

  it('comprobar que se pueden crear tareas', () => {
    cy.visit('https://todomvc.com/examples/react/dist')
   cy.get('[data-testid="text-input"]') .type("comprar el pan{enter}") 
   cy.get('[data-testid="todo-item-toggle"]').click()
})





})