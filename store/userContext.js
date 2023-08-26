import { createContext, useReducer } from "react";

export const userContext = createContext({
    user: [],
    addUser: () => {},
    userLogout: () => {} // Add the userLogout function
});

function userReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            return [ action.payload, ...state];
        case 'LOGOUT':
            return []; // Clear user state on logout
        default:
            return state;
    }
}

function UserContextProvider({ children }) {
    const [userState, dispatch] = useReducer(userReducer, []);

    function addUser(user) {
        dispatch({ type: 'ADD', payload: user });
    }

    function userLogout() {
        dispatch({ type: 'LOGOUT' });
    }

    const value = {
        user: userState,
        addUser: addUser,
        userLogout: userLogout // Include the userLogout function in the value
    };

    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    );
}

export default UserContextProvider;
