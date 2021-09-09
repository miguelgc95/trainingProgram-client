export const registerNewTraining = objectTraining => ({
    type: 'REGISTER_NEW_TRAINING',
    training: objectTraining,
});

export const saveTraining = objectTraining => ({
    type: 'SAVE_TRAINING',
    training: objectTraining,
});

export const purposeNextTraining = otherObjectTraining => ({
    type: 'PURPOSE_TRAINING',
    training: otherObjectTraining,
});
