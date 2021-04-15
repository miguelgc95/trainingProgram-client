export const saveTraining = (objectTraining) => ({
	type: "SAVE_TRAINING",
	training: objectTraining
});

export const purposeeTraining = (otherObjectTraining) => ({
	type: "PURPOSE_TRAINING",
	training: otherObjectTraining
});
