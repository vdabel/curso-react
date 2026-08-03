import './TodoItem.css';

function TodoItem(props) {


  return (
    <li className="TodoItem">
      <span onClick={(event) => {
          props.setTodos(prevTodos => {
            return prevTodos.map(todo => {
              if (todo.text === props.text) {
                return {
                  text: todo.text,
                  completed: !todo.completed
                }
              }
                return todo;  
            })
          })
        }} className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        
      >V</span>
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      <span
      onClick={(event) => {
        props.setTodos(prevTodos => {
          return prevTodos.filter(todo => todo.text !== props.text);
        })
      }}
      className={`Icon Icon-delete`}
      >
        X
      </span>
    </li>
  );
}

export { TodoItem };