import React, { createContext, useReducer } from 'react';
import { exerciseReducer } from './exerciseReducer';

export const ExerciseContext = createContext({
    exerciseData: {
      Sets: [],
      Exercises: [],
        User: {id: 'Stuart'},
    },
    getSetHistory: () => {},
    addNewSet: () => {},
  });


function ExerciseContextProvider({ children }) {
  const [exerciseState, dispatch] = useReducer(exerciseReducer, {
    Sets: [],
    Exercises: [],
    User: {id: 'Stuart'}
  });


  function addSet(newSet) {
      dispatch({ type: 'ADD_SET', payload: newSet });
    }

    function clearSets(){
        dispatch({ type: 'CLEAR_SETS'});
      }

  function addExercise(exercises) {
      const newExercise = {
        id: exercises.id,
        name: exercises.name,
      };
      dispatch({ type: 'ADD_EXERCISE', payload: newExercise });
  }

  function clearExercises(){
    dispatch({ type: 'CLEAR_EXERCISES'});
  }

  const value = {
    exerciseData: exerciseState,
    addSet: addSet,
    clearSets: clearSets,
    addExercise: addExercise,
    clearExercises: clearExercises,
  };

  return (
    <ExerciseContext.Provider value={value}>
      {children}
    </ExerciseContext.Provider>
  );
}

export { ExerciseContextProvider };
