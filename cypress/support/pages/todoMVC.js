class TodoMVC {
    // Selectores
    elements = {
        selectorInput: () => cy.get('.new-todo'),
        selectorItem: (textoTarea) => cy.contains('label', textoTarea),
        todoItems: () => cy.get('.todo-list li'),
        botonBorrar: () => cy.get('button.destroy'),
        checkButton: () => cy.get('.toggle'),
        checkButtonMarcado: () => cy.get('li.completed')
    };
    
    // Métodos
    visitarPagina() {
      cy.visit('https://todomvc.com/examples/react/dist/');
    }

    agregarTarea(taskName) {
      this.elements.selectorInput().type(`${taskName}{enter}`);
    }

    validarExiste(taskName) {
      this.elements.selectorItem(taskName).should('be.visible');
    }

    borrarTarea() {
      this.elements.botonBorrar().invoke('css', 'display', 'block')
      .should('be.visible')
      .click();
    }

    completarTarea() {
      this.elements.checkButton().check()
    }
  }
  
  export default TodoMVC;



  
  