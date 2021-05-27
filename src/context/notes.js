import { useReducer, createContext } from "react";

const initalState = {
  notes: localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [],
  updateNote: null,
};

const NotesContext = createContext(initalState);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTE":
      localStorage.setItem(
        "notes",
        JSON.stringify([action.payload, ...state.notes])
      );
      return {
        ...state,
        notes: [action.payload, ...state.notes],
      };
    case "DELETE_NOTE":
      const deleteNotes = state.notes.filter(
        (note) => note.id !== action.payload
      );
      localStorage.setItem("notes", JSON.stringify(deleteNotes));
      return {
        ...state,
        notes: deleteNotes,
      };
    case "UPDATE_NOTE":
      const newUpdate = action.payload;
      const updatedNote = state.notes.map((note) =>
        note.id === newUpdate.id ? newUpdate : note
      );
      localStorage.setItem("notes", JSON.stringify(updatedNote));
      return {
        ...state,
        notes: updatedNote,
      };
    default:
      return state;
  }
};

const NotesProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  const addNote = (data) => {
    dispatch({
      type: "SET_NOTE",
      payload: data,
    });
  };

  const deleteNote = (data) => {
    dispatch({
      type: "DELETE_NOTE",
      payload: data,
    });
  };

  const updateNote = (data) => {
    dispatch({
      type: "UPDATE_NOTE",
      payload: data,
    });
  };

  return (
    <NotesContext.Provider
      value={{ state, addNote, deleteNote, updateNote }}
      {...props}
    />
  );
};

export { NotesContext, NotesProvider };
