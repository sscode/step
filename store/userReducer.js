export function userReducer(state, action) {
    switch (action.type) {
      case 'ADD':
        return [action.payload, ...state];
        
      case 'LOGOUT':
        return []; // Clear user state on logout
  
      default:
        return state;
    }
  }
  