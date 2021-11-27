import * as TrainingTypes from './training-types';

import api from '../../api';

const saveTrainingRequest = () => ({
    type: TrainingTypes.SAVE_TRAINING_REQUEST,
});

const saveTrainingSuccess = () => ({
    type: TrainingTypes.SAVE_TRAINING_SUCCESS,
});

const saveTrainingError = errorMessage => ({
    type: TrainingTypes.SAVE_TRAINING_ERROR,
    payload: errorMessage,
});

export function saveTraining(trainingObject) {
    return async function saveTrainingThunk(dispatch) {
        dispatch(saveTrainingRequest());

        try {
            const res = await api.saveTraining({
                body: trainingObject,
            });
            return dispatch(saveTrainingSuccess());
        } catch (error) {
            return dispatch(saveTrainingError(error));
        }
    };
}
