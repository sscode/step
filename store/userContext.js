import { createContext, useReducer, useState } from "react";

export const userContext = createContext({
    user: [], // User data, if any
    haptic: true, // Haptic setting, defaults to true
    addUser: () => {},
    updateHaptic: () => {}, // Function to update haptic setting
    userLogout: () => {} // Add the userLogout function
});

function userReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return { ...state, user: action.payload }; // Merge the new user data into the state
        case 'UPDATE_HAPTIC':
            return { ...state, haptic: action.payload }; // Update the haptic setting
        case 'LOGOUT':
            return { haptic: true }; // Reset the state to default (with haptic set to true)
        default:
            return state;
    }
}

function UserContextProvider({ children }) {
  const [userState, dispatch] = useReducer(userReducer, []);
  const [haptic, setHaptic] = useState(true);

    function addUser(user) {
        dispatch({ type: 'ADD', payload: user });
    }

    function updateHaptic(value) {
      setHaptic(value);
    }

    function userLogout() {
        dispatch({ type: 'LOGOUT' });
    }

    const value = {
        user: userState.user, // User data
        haptic: userState.haptic, // Haptic setting
        addUser: addUser,
        userLogout: userLogout,
        haptic: haptic,
        updateHaptic: updateHaptic,
      };

    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
}

export default UserContextProvider;
