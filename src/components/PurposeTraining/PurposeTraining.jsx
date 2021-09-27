import React from 'react';
import { useSelector } from 'react-redux';
import DayTraining from '../DayTraining/DayTraining';

const PurposeTraining = () => {
    const purposeTraining = useSelector(
        store => store.userReducer.info.purposeTraining
    );

    return (
        <div>
            {purposeTraining.map(day => {
                return <DayTraining day={day} />;
            })}
        </div>
    );
};

export default PurposeTraining;
