import React from 'react';
import { TodoContext } from '../TodoContex';
import './TodoCounter.css';


function TodoCounter() {
  const {
    completedTodos : completed, 
    totalTodos : total
  } = React.useContext(TodoContext);

  const flagCompleted = completed === total && total > 0;

  const message = () => {
    if (flagCompleted) {
      return (
        <>
          Felicitaciones!! Completaste todas tus tareas.
        </>
      );
    }

    return (
      <>
        Has completado <span>{completed}</span> de <span>{total}</span> TODOS
      </>
    );
  }

  return (
    <h1 className="TodoCounter">
      {message()}
    </h1>
  );
}

export { TodoCounter };