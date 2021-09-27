import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PurposeTraining from '../../components/PurposeTraining/PurposeTraining.jsx';

import Modal from 'react-modal';

import {
    saveTraining,
    purposeNextTraining,
} from '../../redux/dashboard/dashboard-actions';
import { logout } from '../../redux/user/user-actions';

import { fetchUserData } from '../../redux/user/user-actions';

import SaveTrainingModal from '../../components/Modal/Modal.jsx';

const Dashboard = () => {
    const dispatch = useDispatch();

    const userReducer = useSelector(store => store.userReducer);

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
        if (userReducer.loading) {
            return <h2>Loading training...</h2>;
        } else if (!userReducer.info) {
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
