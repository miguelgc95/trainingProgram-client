import { combineReducers } from 'redux';

import dashboardReducer from './dashboard/dashboardReducer';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    dashboard: dashboardReducer,
});

export default rootReducer;
