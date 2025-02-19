import TodoMVC from '../../support/pages/todoMVC';

describe('Gestión de tareas TodoMVC con POM', () => {
  const todoPage = new TodoMVC();

  beforeEach(() => {
    todoPage.visitarPagina();
  });

  it('Debe permitir crear una tarea', () => {
    const taskName = 'Aprender Cypress';
    todoPage.agregarTarea(taskName);
    todoPage.validarExiste(taskName);
  });

  it('Debe permitir borrar una tarea', () => {
    const taskName = 'Eliminar esta tarea';
    todoPage.agregarTarea(taskName);
    todoPage.borrarTarea(taskName);
    todoPage.elements.todoItems().should('not.exist');
  });

  it('Debe permitir completar una tarea', () => {
    const taskName = 'Marcar esta tarea';
    todoPage.agregarTarea(taskName);
    todoPage.completarTarea();
    todoPage.elements.checkButtonMarcado().should('exist');
  });
});