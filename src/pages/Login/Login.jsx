import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/user/userActions';

import { Redirect } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isAuthenticated = useSelector(store => store.user.isAuthenticated);

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(login({ username, password }));
    };

    if (isAuthenticated) {
        return <Redirect to={'/dashboard'} />;
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    user name:
                    <input
                        type="text"
                        id="username"
                        onChange={event => setUsername(event.target.value)}
                        value={username}
                        placeholder="username"
                        required
                    />
                </label>
                <label htmlFor="password">
                    <input
                        type="password"
                        id="password"
                        onChange={event => setPassword(event.target.value)}
                        value={password}
                        placeholder="password"
                        required
                    />
                </label>
                <button type="submit" value="submit">
                    Go training
                </button>
            </form>
        </>
    );
};

export default Login;
