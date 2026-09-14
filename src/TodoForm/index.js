import React from 'react';
import './TodoForm.css';


function TodoForm() {
  return (
    <form onSubmit={(event) => {
      event.preventDefault(); // Evita que la pagina se recarga, es decir, evita la accion por defecto. 
    }}>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder="Cortar cebolla para el almuerzo" />
      <div className="TodoForm-buttonContainer">
        <button type="" className="TodoForm-button TodoForm-button--cancel">Cancelar</button>
        <button type="" className="TodoForm-button TodoForm-button--add">Añadir</button>
      </div>
    </form>
  );
}

export { TodoForm };