import { NotesProvider } from "./context/notes";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import ToDo from "./pages/ToDo";
import { TodosProvider } from "./context/todos";
import Notes from "./pages/Notes";

function App() {
  return (
    <NotesProvider>
      <TodosProvider>
        <div className="app">
          <Router>
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={ToDo} />
            <Route path="/notes" component={Notes} />
          </Router>
        </div>
      </TodosProvider>
    </NotesProvider>
  );
}

export default App;
