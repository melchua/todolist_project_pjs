/* It should have a function to display todos
It should have a function to add todos
It should have a function to change todos
It should have a function to delete todos
*/


// It should have a function to display todos

var todos = ['item 1', 'item 2', 'item 3'];

function displayTodo() {
  console.log('My todos: ', todos);
}

//  It should have a function to add todos
function addTodo(todo) {
  todos.push(todo);
  displayTodo();
}

// It should have a function to change todos
function changeTodo(position, newValue) {
  todos[position] = newValue;
  displayTodo();
}

// It should have a function to delete todos
function deleteTodo(position) {
  todos.splice(position, 1);
  displayTodo();
}