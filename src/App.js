import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import ExercisesList from "./ExercisesList";
import EditExercise from "./EditExercise";
import CreateUser from "./CreateUser";
import CreateExercise from "./CreateExercise";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br />
        <Route path="/" exact component={()=><ExercisesList/>} />
        <Route path="/edit/:id" component={()=><EditExercise/>} />
        <Route path="/create" component={()=><CreateExercise/>} />
        <Route path="/user" component={()=><CreateUser/>} />
      </div>
    </Router>
  );
}

export default App;
