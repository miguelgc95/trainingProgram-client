import { combineReducers } from 'redux';

import dashboardReducer from './dashboard/dashboard-reducer';
import userReducer from './user/user-reducer';

const rootReducer = combineReducers({
    userReducer,
    dashboardReducer,
});

export default rootReducer;
