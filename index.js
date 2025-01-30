class TodoList {
    constructor() {
        this.todos = [];
    }

    addTodo(task) {
        this.todos.push({
            id: Date.now(),
            task: task,
            completed: false
        });
        console.log('Task added successfully!');
    }

    removeTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        console.log('Task removed successfully!');
    }

    toggleComplete(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
    }

    displayTodos() {
        if (this.todos.length === 0) {
            console.log('No tasks in the list!');
            return;
        }
        console.log('Current Tasks:');
        this.todos.forEach(todo => {
            console.log(`[${todo.completed ? 'X' : ' '}] ${todo.task} (ID: ${todo.id})`);
        });
    }
}

// Example usage:
const myTodoList = new TodoList();
myTodoList.addTodo('Learn JavaScript');
myTodoList.addTodo('Build a project');
myTodoList.displayTodos();
myTodoList.toggleComplete(myTodoList.todos[0].id);
myTodoList.displayTodos();