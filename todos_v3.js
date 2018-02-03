/* It should have a function to display todos
It should have a function to add todos
It should have a function to change todos
It should have a function to delete todos
*/


// It should have a function to display todos


var todoList = {
  todos: ['item 1', 'item 2', 'item 3'],
  displayTodos: function() {
    console.log('My todos:', this.todos);
  },
  addTodo: function(newTodo) {
    this.todos.push(newTodo);
    this.displayTodos();
  },
  changeTodo: function(position, newValue) {
    this.todos[position] = newValue;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position,1);
    this.displayTodos();
  }
};


