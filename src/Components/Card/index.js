import "./Card.css";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import UpdateIcon from "@material-ui/icons/Update";
import { useContext } from "react";
import { NotesContext } from "../../context/notes";

const Card = ({ note, ...rest }) => {
  const { deleteNote } = useContext(NotesContext);

  return (
    <div className="card">
      <div>
        <h3 className="card__title">{note.title}</h3>
        <p className="card__time">2 hours ago</p>
        <p className="card__body">{note.body}</p>
      </div>
      <div className="card__utils">
        <IconButton {...rest} className="card__btnIcon">
          <UpdateIcon color="primary" />
        </IconButton>
        <IconButton
          onClick={() => deleteNote(note.id)}
          className="card__btnIcon"
        >
          <DeleteIcon color="secondary" />
        </IconButton>
      </div>
    </div>
  );
};

export default Card;
