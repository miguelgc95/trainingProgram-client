const initialState = {
    isAuthenticated: true,
    info: '',
    loading: false,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return { ...state, isLoggedin: true };
        case 'LOGOUT':
            return { ...state, isLoggedin: false };
        case 'FETCH_USER_DATA_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_USER_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                info: action.payload,
            };
        case 'FETCH_USER_DATA_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        default:
            return state;
    }
};

export default authReducer;
