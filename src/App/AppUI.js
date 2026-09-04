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


function AppUI() {
  return (
    <>
      <TodoContext.Consumer>
        {({
          loading,
          error,
          totalTodos,
          searchedTodos,
          completeTodo,
          deleteTodo
        }) => (
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
          </>
        )}
        
      </TodoContext.Consumer>
        
      <CreateTodoButton />
    </>
  );
}

export { AppUI };