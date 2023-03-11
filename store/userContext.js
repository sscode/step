import { createContext, useReducer } from "react";


export const userContext = createContext({
    user: [],
    addUser: {}
    });
  
  function userReducer(state, action) {
    switch (action.type) {
      case 'ADD':
        return [ action.payload, ...state];
      default:
        return state;
    }
  }
  
  function UserContextProvider({ children }) {
    const [userState, dispatch] = useReducer(userReducer, []);
  
    function addUser(user) {
      dispatch({ type: 'ADD', payload: user });
    }
  
    const value = {
      user: userState,
      addUser: addUser,
    };
  
    return (
      <userContext.Provider value={value}>
        {children}
      </userContext.Provider>
    );
  }
  
  export default UserContextProvider;
  