import * as TrainingTypes from './training-types';

export const TrainingInitialState = {
    isSavingTraining: false,
    saveTrainingSuccess: undefined,
    saveTrainingError: undefined,
};

const TrainingReducer = (state = TrainingInitialState, action) => {
    switch (action.type) {
        case TrainingTypes.SAVE_TRAINING_REQUEST: {
            return {
                ...state,
                isSavingTraining: true,
            };
        }
        case TrainingTypes.SAVE_TRAINING_SUCCESS: {
            return {
                ...state,
                isSavingTraining: false,
                saveTrainingSuccess: true,
                saveTrainingError: false,
            };
        }
        case TrainingTypes.SAVE_TRAINING_ERROR: {
            return {
                ...state,
                isSavingTraining: false,
                saveTrainingSuccess: false,
                saveTrainingError: true,
            };
        }
        default: {
            return state;
        }
    }
};

export default TrainingReducer;
