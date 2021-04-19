import axios from 'axios';

export const login = credentials => {
    return {
        type: 'LOGIN',
        credentials: credentials,
    };
};

export const logout = () => {
    return {
        type: 'LOGOUT',
    };
};

export const getUserDataRequest = () => {
    return { type: 'FETCH_USER_DATA_REQUEST' };
};

export const getUserDataSuccess = userData => {
    return {
        type: 'FETCH_USER_DATA_SUCCESS',
        payload: userData,
    };
};

export const getUserDataError = error => {
    return {
        type: 'FETCH_USER_DATA_ERROR',
        error,
    };
};

export const fetchUserData = () => {
    return async dispatch => {
        dispatch(getUserDataRequest());
        try {
            const userData = await axios.get('http://localhost:3005/user');
            // const userData = await axios.get(
            //     'https://jsonplaceholder.typicode.com/posts'
            // );
            console.log(userData);
            dispatch(getUserDataSuccess(userData.data));
        } catch (error) {
            dispatch(getUserDataError(error));
        }
    };
};
