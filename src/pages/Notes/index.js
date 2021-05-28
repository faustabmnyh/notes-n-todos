import { useContext, useState } from "react";
import { NotesContext } from "../../context/notes";
import Card from "../../Components/Card";
import "./Notes.css";
import { Link } from "react-router-dom";

const Notes = () => {
  const [values, setValues] = useState({
    title: "",
    body: "",
    id: "",
    time: "",
    button: "Send",
  });

  const {
    state: { notes },
    addNote,
    updateNote,
  } = useContext(NotesContext);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSaveNote = (e) => {
    e.preventDefault();
    const data = {
      title: values.title,
      body: values.body,
      id: new Date().getTime(),
    };

    if (values.button === "Send") {
      setValues({
        id: "",
        title: "",
        body: "",
        button: "Send",
      });
      addNote({ ...data, time: new Date().getTime() });
    } else {
      setValues({
        button: "Send",
        id: "",
        title: "",
        body: "",
      });
      data.id = values.id;
      console.log(values);
      updateNote({ ...data, time: values.time });
    }
  };

  const handleUpdate = (note) => {
    setValues({
      title: note.title,
      body: note.body,
      id: note.id,
      button: "Update",
      time: note.time,
    });
  };

  const handleCancel = () => {
    setValues({
      title: "",
      body: "",
      button: "Simpan",
    });
  };

  return (
    <div className="notes">
      <div className="notes__header">
        <div className="notes__headerLeft">
          <Link to="/">
            <img src="/images/logo.png" alt="" className="notes__logo" />
          </Link>

          <div>
            <h1 className="notes__title">Wellcome to MG Notes</h1>
            <p className="notes__subTitle">
              Take Notes <span>Easily.</span>
            </p>
          </div>
        </div>
        <Link to="/todo">
          <button className="notes__gotoTodo">Go To ToDo &gt;</button>
        </Link>
      </div>
      <div className="notes__section">
        <div className="notes__card">
          {notes.map((note) => {
            return (
              <Card
                note={note}
                key={note.id}
                onClick={() => handleUpdate(note)}
              />
            );
          })}
        </div>
        <form>
          <input
            label="Title"
            name="title"
            value={values.title}
            onChange={handleChange}
            placeholder="Title"
            className="notes__formInput"
          />
          <textarea
            type="text"
            placeholder="Body"
            name="body"
            value={values.body}
            onChange={handleChange}
          />
          <div className="notes__allBtn">
            {values?.button === "Update" ? (
              <button onClick={handleCancel} className="notes__btnCancel">
                Cancel
              </button>
            ) : null}
            <button className="notes__btn" onClick={handleSaveNote}>
              {values?.button === "Update" ? values?.button : values.button}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Notes;
