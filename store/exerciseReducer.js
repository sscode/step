export function exerciseReducer(state, action) {
    switch (action.type) {
    case 'ADD_SET':
        const updatedSets = [...state.Sets, action.payload];
        // updatedSets.sort((a, b) => new Date(b.date) - new Date(a.date));
        return { ...state, Sets: updatedSets };   
    case 'CLEAR_SETS':
        return { ...state, Sets: [] };
      case 'ADD_EXERCISE':
        return { ...state, Exercises: [...state.Exercises, action.payload] };
      case 'EDIT_EXERCISE':
        const editedExercises = state.Exercises.map(exercise => {
          if (exercise.id === action.payload.exerciseId) {
            return {
              ...exercise,
              // name: action.payload.editedName,
              color: action.payload.activeColor,
            };
          }
          return exercise;
        });
        return {
          ...state,
          Exercises: editedExercises,
        };   
    case 'DELETE_EXERCISE':
    // console.log('action.payload :', action.payload);
      const filteredExercises = state.Exercises.filter(
        (exercise) => exercise.id !== action.payload
      );
      // console.log('filteredExercises :', filteredExercises);
      return { ...state, Exercises: filteredExercises };   
    case 'CLEAR_EXERCISES':
        return { ...state, Exercises: [] };
    case 'UPDATE_DATA':
      return {
        ...state,
        Sets: action.payload.sets,
        Exercises: action.payload.exercises,
      };
      case 'UPDATE_LAST_SET':
        const updatedExercises = state.Exercises.map(exercise => {
          if (exercise.id === action.payload.exerciseId) {
            return {
              ...exercise,
              lastSet: action.payload.lastSetDate,
            };
          }
          return exercise;
        });
        return {
          ...state,
          Exercises: updatedExercises,
        };
    case 'DELETE_SET':
        const filteredSets = state.Sets.filter((set) => set.id !== action.payload);
        return { ...state, Sets: filteredSets };
    case 'UPDATE_USER':
        // console.log('USER action.payload :', action.payload);
        return { ...state, User: action.payload };
    case 'RESET_CONTEXT':
      return {
        Sets: [],
        Exercises: [],
        User: { email: '' },
      };
    default:
        return state;
    }
  }