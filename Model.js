export class Model {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }

    addTodo(todoText) {
        const todo = {
            id:
                this.todos.length > 0
                    ? this.todos[this.todos.length - 1].id + 1
                    : 1,
            text: todoText,
        };
        this.todos.push(todo);
        this.setTodos(this.todos);
    }

    setTodos(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);

        this.setTodos(this.todos);
    }
}
