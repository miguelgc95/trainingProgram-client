import axios from "axios";

export const login = (credentials) => {
    return {
        type: "LOGIN",
        credentials: credentials,
    };
};

export const logout = () => {
    return {
        type: "LOGOUT",
    };
};

export const fetchUserData = () => {
    return async (dispath) => {
        // const userData = await axios.get("http://localhost:3005/user");
        const userData = await axios.get(
            "https://jsonplaceholder.typecode.com/post"
        );
        dispath({
            type: "FETCH_USER_DATA",
            payload: userData,
        });
    };
};
