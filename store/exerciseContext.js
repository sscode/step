import React, { createContext, useReducer } from 'react';

export const ExerciseContext = createContext({
    exerciseData: {
      Sets: [],
      Exercises: [],
    },
    getSetHistory: () => {},
    addNewSet: () => {},
  });

function exerciseReducer(state, action) {
  switch (action.type) {
    case 'ADD_SET':
        return { ...state, Sets: [...state.Sets, action.payload] };
    case 'ADD_EXERCISE':
      return { ...state, Exercises: [...state.Exercises, action.payload] };
    default:
      return state;
  }
}

function ExerciseContextProvider({ children }) {
  const [exerciseState, dispatch] = useReducer(exerciseReducer, {
    Sets: [],
    Exercises: [],
  });

  function getSetHistory(workoutData) {
    dispatch({ type: 'ADD_SET', payload: workoutData });
  }

  function addNewSet(newSet) {
    dispatch({ type: 'ADD_SET', payload: newSet });
  }

  function getAllExercises(exercises) {
    if (Array.isArray(exercises)) {
      exercises.forEach((exercise) => {
        const newExercise = {
          id: exercise.id,
          name: exercise.name,
        };
        dispatch({ type: 'ADD_EXERCISE', payload: newExercise });
      });
    } else {
      const newExercise = {
        id: exercises.id,
        name: exercises.name,
      };
      dispatch({ type: 'ADD_EXERCISE', payload: newExercise });
    }
  }
  

  const value = {
    exerciseData: exerciseState,
    addNewSet: addNewSet,
    getSetHistory: getSetHistory,
    getAllExercises: getAllExercises,
  };

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
}

export { ExerciseContextProvider };
