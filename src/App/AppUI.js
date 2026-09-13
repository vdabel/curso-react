import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CounterLoading } from '../CounterLoading';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContex';
import { Modal } from '../Modal';


function AppUI() {
  const {
    loading,
    error,
    totalTodos,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = React.useContext(TodoContext);

  return (
    <>
      
      {loading ? 
        <CounterLoading /> 
        : 
        <TodoCounter />
      }
      <TodoSearch />
      
      <TodoList>
        {loading &&(
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}

        {error && <TodosError />}

        {(!loading && totalTodos === 0) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed} 
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
        
      </TodoList>

      <CreateTodoButton openModal={openModal} setOpenModal={() => setOpenModal(!openModal)} />

      {openModal && (
        <Modal>
          La funcionalidad de agregar TODO
        </Modal>
      )}
    </>
  );
}

export { AppUI };