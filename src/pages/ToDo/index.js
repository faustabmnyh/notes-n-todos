import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ToDoContent from "../../Components/ToDoContent";
import { TodosContext } from "../../context/todos";
import "./ToDo.css";

const ToDo = () => {
  const [values, setValues] = useState({
    text: "",
    id: "",
  });
  const [status, setStatus] = useState("All");
  const [filterTodos, setFilterTodos] = useState([]);
  const {
    state: { todos },
    addTodo,
  } = useContext(TodosContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({
      text: values.text,
      id: new Date().getTime(),
    });
    setValues({
      text: "",
      id: "",
    });
  };

  useEffect(() => {
    if (status === "completed") {
      setFilterTodos(todos.filter((todo) => todo.completed === true));
    } else if (status === "uncompleted") {
      setFilterTodos(todos.filter((todo) => todo.completed === false));
    } else {
      return setFilterTodos(todos);
    }
  }, [todos, status]);

  const handleStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <div className="todo">
      <div className="todo__header">
        <div className="todo__left">
          <Link to="/">
            <img src="/images/logo.png" alt="" className="todo__logo" />
          </Link>
          <div>
            <h1 className="todo__title">Wellcome to MG To Do</h1>
            <p className="todo__subTitle">
              Set your <span>goals</span> every day.
            </p>
          </div>
        </div>

        <Link to="/notes">
          <button className="todo__gotoNotes">Go To Notes</button>
        </Link>
      </div>

      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="todo__addTask">
            <input
              type="text"
              placeholder="Add Your Task Here..."
              className="todo__input"
              value={values.text}
              required
              onChange={(e) => setValues({ text: e.target.value })}
            />
            <button className="todo__btn">Add Task</button>
          </div>

          <div className="todo__select">
            <select
              name="todos"
              className="todo__filter"
              onChange={handleStatus}
            >
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
      </div>
      <p className="todo__todo">TO DO :</p>
      <div className="todo__content">
        {filterTodos.map((todo) => {
          return <ToDoContent todo={todo} key={todo.todo.id} />;
        })}
      </div>
    </div>
  );
};

export default ToDo;
