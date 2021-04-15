const initialState = { isAuthenticated: true };

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isLoggedin: true };
        case 'LOGOUT':
            return { ...state, isLoggedin: false };
        case 'FETCH_USER_DATA':
            return { ...state, info: action.payload };
        default:
            return state;
    }
};

export default authReducer;
