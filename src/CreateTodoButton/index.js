import './CreateTodoButton.css';

function CreateTodoButton({ openModal, setOpenModal }) {
  return (
    <button 
      className="CreateTodoButton" 
      onClick={setOpenModal}
    >
      +
    </button>
  );
}

export { CreateTodoButton };