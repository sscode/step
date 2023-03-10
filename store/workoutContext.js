import { createContext, useReducer } from "react";


export const workoutContext = createContext({
    user: [],
    workouts: [],
    addWorkout: ({ description, date }) => {},
    setWorkout: (workouts) => {},
    deleteWorkout: (id) => {},
    updateWorkout: (id, { description, date }) => {},
  });
  
  function workoutReducer(state, action) {
    switch (action.type) {
      case 'SET_USER':
        return { user: action.payload };
      case 'ADD':
        return [ action.payload, ...state];
      case 'UPDATE':
        const updatableWorkoutIndex = state.findIndex(
          (expense) => expense.id === action.payload.id
        );
        const updatableExpense = state[updatableWorkoutIndex];
        const updatedItem = { ...updatableExpense, ...action.payload.data };
        const updatedExpenses = [...state];
        updatedExpenses[updatableWorkoutIndex] = updatedItem;
        return updatedExpenses;
      case 'DELETE':
        return state.filter((workout) => workout.id !== action.payload);
      case 'SET':
        //change the order
        const inverted = action.payload.reverse();
        return inverted;
      default:
        return state;
    }
  }
  
  function WorkoutContextProvider({ children }) {
    const [workoutState, dispatch] = useReducer(workoutReducer, []);

    function setUser(user) {
      dispatch({ type: 'SET_USER', payload: user });
    }
  
    function addWorkout(workoutData) {
      dispatch({ type: 'ADD', payload: workoutData });
    }
  
    function deleteWorkout(id) {
      dispatch({ type: 'DELETE', payload: id });
    }
  
    function updateWorkout(id, workoutData) {
      dispatch({ type: 'UPDATE', payload: { id: id, data: workoutData } });
    }

    function setWorkout(workouts) {
      dispatch({ type: 'SET', payload: workouts });
    }
  
    const value = {
      setUser: setUser,
      workouts: workoutState,
      setWorkout: setWorkout,
      addWorkout: addWorkout,
      deleteWorkout: deleteWorkout,
      updateWorkout: updateWorkout,
    };
  
    return (
      <workoutContext.Provider value={value}>
        {children}
      </workoutContext.Provider>
    );
  }
  
  export default WorkoutContextProvider;
  