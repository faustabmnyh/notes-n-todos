const { createContext, useReducer } = require("react");

const initialState = {
  todos: localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [],
};

const TodosContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const newTodos = [
        { todo: action.payload, completed: false },
        ...state.todos,
      ];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    case "TOGGLE_TODO":
      const completedTodo = state.todos.map((todo) =>
        todo.todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(completedTodo));
      return {
        ...state,
        todos: completedTodo,
      };
    case "DELETE_TODO":
      const deletedTodo = state.todos.filter(
        (todo) => todo.todo.id !== action.payload
      );
      localStorage.setItem("todos", JSON.stringify(deletedTodo));
      return {
        ...state,
        todos: deletedTodo,
      };
    default:
      return state;
  }
};

const TodosProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = (data) => {
    dispatch({
      type: "ADD_TODO",
      payload: data,
    });
  };

  const toggleTodo = (id) => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id,
    });
  };

  const deleteTodo = (id) => {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });
  };

  return (
    <TodosContext.Provider
      value={{ state, addTodo, deleteTodo, toggleTodo }}
      {...props}
    />
  );
};

export { TodosContext, TodosProvider };
