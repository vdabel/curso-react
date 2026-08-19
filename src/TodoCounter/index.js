import './TodoCounter.css';

function TodoCounter({ total, completed }) {
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