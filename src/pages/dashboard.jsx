import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveTraining, purposeeTraining } from '../actions/dashboardActions';
import { logout } from '../actions/userActions';

import { fetchUserData } from '../actions/userActions';

const Dashboard = () => {
    const dispatch = useDispatch();

    const userInfo = useSelector(store => store.auth);
    console.log(userInfo);
    useEffect(() => {
        console.log('entro');
        dispatch(fetchUserData);
    }, [dispatch, userInfo]);

    const handleSaveTraining = () => {
        dispatch(saveTraining('objectTraining'));
    };
    const handlePurposeTraining = () => {
        dispatch(purposeeTraining('otherObjectTraining'));
    };
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={handleSaveTraining}>Guardar entreno</button>
            <button onClick={handlePurposeTraining}>
                Proponer para próximo entrno
            </button>
            <button onClick={handleLogout}>Logout</button>
            {/* {userInfo ? userInfo.map(item => <p>{item}</p>) : <p>weo weo</p>} */}
        </>
    );
};

export default Dashboard;
