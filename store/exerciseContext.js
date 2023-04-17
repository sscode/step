import React, { createContext, useState, useEffect } from 'react';
import {
  fetchExercises,
  fetchWorkoutHistory,
  addExercise,
  addWorkoutHistory,
} from '../util/firebase/http';

const ExerciseContext = createContext();

const ExerciseProvider = ({ children }) => {
  const [exercises, setExercises] = useState([]);
  const [workoutHistory, setWorkoutHistory] = useState([]);

  const updateExerciseData = (exerciseIndex, updatedData) => {
    setExercises((prevExercises) => {
      const updatedExercises = [...prevExercises];
      updatedExercises[exerciseIndex] = updatedData;
      return updatedExercises;
    });
  };

  fetchExercises

  useEffect(() => {
    // Replace 'userId' with the actual user ID when fetching exercises and workout history
    const userId = 'stu';
    (async () => {
      const exercisesData = await fetchExercises(userId);
      if (exercisesData) {
        const exercisesArray = Object.keys(exercisesData).map((key) => ({
          id: key,
          name: exercisesData[key].name,
        }));
        setExercises(exercisesArray);
      }
      const workoutHistoryData = await fetchWorkoutHistory(userId);
      if (workoutHistoryData) {
        const workoutHistoryArray = Object.keys(workoutHistoryData).map((key) => ({
          id: key,
          date: workoutHistoryData[key].date,
          sets: workoutHistoryData[key].sets,
        }));
        setWorkoutHistory(workoutHistoryArray);
      }
    })();
  }, []);

  return (
    <ExerciseContext.Provider
      value={{
        exercises,
        workoutHistory,
        addExercise,
        addWorkoutHistory,
        updateExerciseData,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export { ExerciseContext, ExerciseProvider };
