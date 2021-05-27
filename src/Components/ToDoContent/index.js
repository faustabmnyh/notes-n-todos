import "./ToDoContent.css";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import { useContext } from "react";
import { TodosContext } from "../../context/todos";
import CloseIcon from "@material-ui/icons/Close";

const ToDoContent = ({ todo }) => {
  const { deleteTodo, toggleTodo } = useContext(TodosContext);

  return (
    <div className="todoContent">
      <div
        className={
          todo.completed ? "todoContent__success" : "todoContent__main"
        }
      >
        <div>
          <p
            className={
              todo.completed ? "todoContent__textSuccess" : "todoContent__text"
            }
          >
            {todo.todo.text}
          </p>
        </div>
        <div className="todoContent__btn">
          {todo.completed ? (
            <CloseIcon
              className="todoContent__btnTick"
              fontSize="small"
              onClick={() => toggleTodo(todo.todo.id)}
            />
          ) : (
            <DoneIcon
              className="todoContent__btnTick"
              fontSize="small"
              onClick={() => toggleTodo(todo.todo.id)}
            />
          )}
          <DeleteIcon
            className="todoContent__btnDelete"
            fontSize="small"
            onClick={() => deleteTodo(todo.todo.id)}
          />
        </div>
      </div>
     
    </div>
  );
};

export default ToDoContent;
