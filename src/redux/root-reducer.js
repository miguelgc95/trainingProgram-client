import { combineReducers } from 'redux';

import dashboardReducer from './dashboard/dashboard-reducer';
import userReducer from './user/user-reducer';
import trainingReducer from './user/training-reducer';

const rootReducer = combineReducers({
    userReducer,
    dashboardReducer,
    trainingReducer,
});

export default rootReducer;
