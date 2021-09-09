import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PurposeTraining from '../components/PurposeTraining.jsx';

import Modal from 'react-modal';

import {
    saveTraining,
    purposeNextTraining,
} from '../Redux/dashboard/dashboardActions';
import { logout } from '../Redux/user/userActions';

import { fetchUserData } from '../Redux/user/userActions';

import SaveTrainingModal from '../components/modal.jsx';

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

    // let subtitle;
    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        console.log('yo');
        // subtitle.style.color = '#f00';
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            <h1>Dashboard</h1>
            <button onClick={openModal}>Registrar nuevo entreno</button>

            <SaveTrainingModal
                isOpen={isOpen}
                closeModal={closeModal}
                afterOpenModal={afterOpenModal}
                // subtitle={subtitle}
            />

            <button onClick={handlePurposeTraining}>
                Proponer para próximo entrno
            </button>
            <button onClick={handleLogout}>Logout</button>
            {renderProposalTraining()}
        </>
    );
};

export default Dashboard;
