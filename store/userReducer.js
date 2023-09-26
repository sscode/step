export function userReducer(state, action) {
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
