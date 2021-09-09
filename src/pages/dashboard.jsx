import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PurposeTraining from '../components/PurposeTraining.jsx';
import {
    saveTraining,
    purposeNextTraining,
} from '../Redux/dashboard/dashboardActions';
import { logout } from '../Redux/user/userActions';

import { fetchUserData } from '../Redux/user/userActions';

const Dashboard = () => {
    const dispatch = useDispatch();

    const userStore = useSelector(store => store.user);

    useEffect(() => {
        dispatch(fetchUserData());
    }, [dispatch]);

    const handleSaveTraining = () => {
        dispatch(saveTraining('objectTraining'));
    };
    const handlePurposeTraining = () => {
        dispatch(purposeNextTraining('otherObjectTraining'));
    };
    const handleLogout = () => {
        dispatch(logout());
    };

    function renderProposalTraining() {
        if (userStore.loading) {
            return <h2>Loading training...</h2>;
        } else if (!userStore.info) {
            return <h2>No info avaliable...</h2>;
        } else {
            return <PurposeTraining />;
        }
    }
    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={handleSaveTraining}>
                Registrar nuevo entreno
            </button>
            <button onClick={handlePurposeTraining}>
                Proponer para próximo entrno
            </button>
            <button onClick={handleLogout}>Logout</button>
            {renderProposalTraining()}
        </>
    );
};

export default Dashboard;
