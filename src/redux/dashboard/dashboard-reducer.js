const initialState = { algo: 'algo' };

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_NEW_TRAINING':
            return state;
        case 'SAVE_TRAINING':
            return state;
        case 'PURPOSE_TRAINING':
            return state;
        default:
            return state;
    }
};

export default dashboardReducer;
