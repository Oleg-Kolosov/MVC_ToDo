export class View {
    constructor() {
        this.app = document.getElementById('root');
        this.container = this.createElement('div', 'container w-50 pt-5');
        this.header = this.createElement(
            'header',
            'd-flex flex-column align-items-center'
        );
        this.title = this.createElement('h1', 'h1 mb-3', 'Todo App');
        this.inputGroup = this.createElement(
            'div',
            'input-group input-group-lg mb-3'
        );
        this.input = this.createElement('input', 'form-control');
        this.btnAddTodo = this.createElement(
            'button',
            'btn btn-dark',
            'Add Todo'
        );
        this.todoList = this.createElement('ul', 'w-100 list-group');

        this.inputGroup.append(this.input, this.btnAddTodo);
        this.header.append(this.title, this.inputGroup, this.todoList);
        this.container.append(this.header);
        this.app.append(this.container);
    }
    createElement(tag, classname, text = '') {
        let element = document.createElement(tag);
        element.className = classname;
        element.innerText = text;
        return element;
    }

    displayTodos(todos) {
        // Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }

        todos.forEach(todoValue => {
            let card = this.createElement(
                'div',
                'card mb-2 px-4 justify-content-between flex-row align-items-center'
            );
            card.id = todoValue.id;
            let cardText = this.createElement('div', 'card-body');
            cardText.innerText = todoValue.text;
            let btnDeleteTodo = this.createElement('button', 'btn-close');

            card.append(cardText, btnDeleteTodo);

            this.todoList.append(card);
        });
    }

    get _todoText() {
        return this.input.value;
    }

    _resetInput() {
        this.input.value = '';
    }

    bindAddTodo(handler) {
        this.btnAddTodo.addEventListener('click', () => {
            if (this._todoText) {
                handler(this._todoText);
            }
            this._resetInput();
        });
    }

    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', e => {
            console.log(e);
            if (e.target.className === 'btn-close') {
                const id = parseInt(e.target.parentElement.id);

                handler(id);
            }
        });
    }
}
