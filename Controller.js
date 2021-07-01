export class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Display initial todos
        this.onTodoListChanged(this.model.todos);

        this.model.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindAddTodo(this.handleAddTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
    }

    onTodoListChanged = todos => {
        this.view.displayTodos(todos);
    };

    handleAddTodo = todoText => {
        this.model.addTodo(todoText);
    };

    handleDeleteTodo = id => {
        this.model.deleteTodo(id);
    };
}
