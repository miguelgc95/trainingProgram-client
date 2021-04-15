const initialState = { algo: "algo",};

const dashboardReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SAVE_TRAINING":
			return state;
		case "PURPOSE_TRAINING":
			return state;
		default:
			return state;
	}
};

export default dashboardReducer;
