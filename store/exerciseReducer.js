export function exerciseReducer(state, action) {
    switch (action.type) {
    case 'ADD_SET':
        const updatedSets = [...state.Sets, action.payload];
        updatedSets.sort((a, b) => new Date(b.date) - new Date(a.date));
        return { ...state, Sets: updatedSets };   
    case 'CLEAR_SETS':
        return { ...state, Sets: [] };
      case 'ADD_EXERCISE':
        return { ...state, Exercises: [...state.Exercises, action.payload] };
    case 'CLEAR_EXERCISES':
        return { ...state, Exercises: [] };
    case 'UPDATE_DATA':
      return {
        ...state,
        Sets: action.payload.sets,
        Exercises: action.payload.exercises,
      };
      default:
        return state;
    }
  }