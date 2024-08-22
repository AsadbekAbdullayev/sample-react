import { configureStore, combineReducers } from '@reduxjs/toolkit';
import generelReducer from '../slices/generelSlice';
import resumeReducer from '../slices/resumeSlice';

const reducers = combineReducers({
	generelReducer,
	resumeReducer,
});

export default configureStore({
	reducer: reducers,
});
