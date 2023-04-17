export function exerciseReducer(state, action) {
    switch (action.type) {
      case 'ADD_SET':
          return { ...state, Sets: [...state.Sets, action.payload] };
    case 'CLEAR_SETS':
        return { ...state, Sets: [] };
      case 'ADD_EXERCISE':
        return { ...state, Exercises: [...state.Exercises, action.payload] };
    case 'CLEAR_EXERCISES':
        return { ...state, Exercises: [] };
      default:
        return state;
    }
  }