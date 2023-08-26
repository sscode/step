import React, { createContext, useReducer } from 'react';
import { exerciseReducer } from './exerciseReducer';

export const ExerciseContext = createContext({
  exerciseData: {
    Sets: [],
    Exercises: [],
    User: { id: 'Stuart' },
  },
  getSetHistory: () => {},
  addNewSet: () => {},
});

function ExerciseContextProvider({ children }) {
  const [exerciseState, dispatch] = useReducer(exerciseReducer, {
    Sets: [],
    Exercises: [],
    User: { id: 'stusim' },
  });

  function addSet(newSet) {
    dispatch({ type: 'ADD_SET', payload: newSet });
  }

  function deleteSet(setId) {
    dispatch({ type: 'DELETE_SET', payload: setId });
  }

  function clearSets() {
    dispatch({ type: 'CLEAR_SETS' });
  }

  function addExercise(exercises) {
    const newExercise = {
      id: exercises.id,
      name: exercises.name,
      color: exercises.color,
    };
    dispatch({ type: 'ADD_EXERCISE', payload: newExercise });
  }

  function editExercise(exerciseDetails) {
    // console.log('editExercise context :', exerciseDetails);
    const { exerciseId, activeColor } = exerciseDetails;
    dispatch({
      type: 'EDIT_EXERCISE',
      payload: { exerciseId, activeColor },
    });
  }

  function deleteExercise(exerciseId) {
    dispatch({ type: 'DELETE_EXERCISE', payload: exerciseId.exerciseId });
  }
  

  function clearExercises() {
    dispatch({ type: 'CLEAR_EXERCISES' });
  }

  function updateData({ exercises, sets }) {
    dispatch({ type: 'UPDATE_DATA', payload: { exercises, sets } });
  }

  const value = {
    exerciseData: exerciseState,
    addSet: addSet,
    clearSets: clearSets,
    addExercise: addExercise,
    deleteExercise: deleteExercise,
    clearExercises: clearExercises,
    updateData: updateData,
    deleteSet: deleteSet,
    editExercise: editExercise,
  };

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
}

export { ExerciseContextProvider };
