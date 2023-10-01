function App(){
  const [todos, setTodos] = React.useState([
    {
      text: ' First items first',
      isCompleted: false,
    },
    {
      text: ' A quick snack',
      isCompleted: false,
    },
    {
      text: ' Finish the work',
      isCompleted: false,
    }        
  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted:false}];
    setTodos(newTodos);
  }
  const removeTodo = index => {
    let temp = [...todos];    
    temp.splice(index, 1);
    setTodos(temp);
  }


  const moveUpTodo = index => {
    if (index === 0) return; // Already at the top
    const newTodos = [...todos];
    const temp = newTodos[index - 1];
    newTodos[index - 1] = newTodos[index];
    newTodos[index] = temp;
    setTodos(newTodos);
  };

  const moveDownTodo = index => {
    if (index === todos.length - 1) return; // Already at the bottom
    const newTodos = [...todos];
    const temp = newTodos[index + 1];
    newTodos[index + 1] = newTodos[index];
    newTodos[index] = temp;
    setTodos(newTodos);
  };


  return(
    <div className="app">
      <div className="todo-list" >
      {todos.map((todo, i) => (
      <Todo 
        key={i} 
        index={i} 
        id={i} 
        todo={todo} 
        total={todos.length}
        remove={removeTodo}
        moveUp={moveUpTodo} 
        moveDown={moveDownTodo} />
      ))}   
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
