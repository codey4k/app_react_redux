/*
 * tipos de acciones
 */
function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  }
}

dispatch(addTodo(text))