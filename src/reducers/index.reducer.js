import { combineReducers } from 'redux';
import currentUser from './currentUser.reducer';
import favouriteHomes from './favouriteHomes.reducer'

const rootReducer = combineReducers({ currentUser, favouriteHomes });

export default rootReducer;
