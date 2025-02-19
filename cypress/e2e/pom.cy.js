describe('TodoMVC', () => {

  // Variables
  const webSite = 'https://todomvc.com/examples/react/dist';
  const selectorInput = '.new-todo';
  const selectorItem = '.todo-list li';
  const inputContainer = "ul.todo-list li input";
  const botonEliminar = "button.destroy"
  let nombreTarea = "";
  const tareas = ['Ir al supermercado', 'Barrer la cocina', 'Estudiar QA', 'Ir al gimnasio'];
 
  // Antes de cada test case visita el sitio
  beforeEach(() => {
    cy.visit(webSite);
  });

  //1. Crear Tarea
  it('Crear Tarea', () => {
    // Paso 1: Ingresar tarea y pulsar enter
    nombreTarea = tareas[0];
    cy.get(selectorInput).type(nombreTarea + '{enter}'); 
    // Paso 2: Verificamos que esa tarea se ha agregado
    cy.get(selectorItem).should('have.text', nombreTarea)
  });

  //2. Editar tarea
  it('Editar tarea', () => {
    // Paso 1: Ingresar tarea y pulsar enter
    nombreTarea = tareas[0];
    cy.get(selectorInput).type(nombreTarea + '{enter}');
    // Paso 2: Doble click, editar tarea, borrar y añadir la nueva
    cy.get(selectorItem).dblclick();
    nombreTarea = tareas[1];
    cy.get(inputContainer)
      .clear()
      .type(nombreTarea + '{enter}'); 
  });

  //3. Eliminar una tarea
  it('Eliminar una tarea', () => {
    // Paso 1: Ingresar tarea y pulsar enter
    nombreTarea = tareas[2];
    cy.get(selectorInput).type(nombreTarea + '{enter}');
    // Paso 2: Fuerza a poner visible el elemento botonEliminar y lo pulsa
    cy.get(botonEliminar)
      .invoke('css', 'display', 'block') // Hacerlo visible
      .should('be.visible') // Verificar que ahora es visible
      .click(); // Hacer clic en el botón
    cy.get(selectorItem).should('not.exist'); // Verifica que no existe la lista de tareas
  });
})