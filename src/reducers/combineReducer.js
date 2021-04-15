import { combineReducers } from 'redux';

import dashboardReducer from './dashboardReducer';
import authReducer from './authReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer,
})

export default rootReducer;