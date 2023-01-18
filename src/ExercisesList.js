import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./main.css";

function Exercise(props) {
  return (
    <tr>
      <td>{props.exercise.username}</td>
      <td>{props.exercise.description}</td>
      <td>{props.exercise.duration}</td>
      <td>{props.exercise.date.substring(0, 10)}</td>
      <td>
        <Link to={"/edit/" + props.exercise._id}>edit</Link> |{" "}
        <a
          href="/"
          onClick={() => {
            props.deleteExercise(props.exercise._id);
          }}
        >
          delete
        </a>
      </td>
    </tr>
  );
}

export default function ExercisesList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises/")
      .then((response) => {
        setExercises(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(exercises);

  function deleteExercise(id) {
    axios.delete("http://localhost:5000/exercises/" + id).then((response) => {
      console.log(response.data);
    });

    setExercises((prev) => {
      prev.filter((el) => el._id !== id);
    });
  }

  function ExerciseList() {
    return exercises.map((currentexercise) => {
      return (
        <Exercise
          key={currentexercise._id}
          exercise={currentexercise}
          deleteExercise={deleteExercise}
        />
      );
    });
  }

  return (
    <div className="main">
      <h3>Logged Exercises</h3>
      {exercises.length === 0 ? (
        <div>
          <br /> <p>No Exercises To Show 😟</p>
        </div>
      ) : (
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <ExerciseList />
          </tbody>
        </table>
      )}
    </div>
  );
}
