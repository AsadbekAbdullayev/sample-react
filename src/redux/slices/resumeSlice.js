import { createSlice } from '@reduxjs/toolkit';

let initialState = {
	open_sector: '',
};

const resumeSlice = createSlice({
	name: 'resume',
	initialState,
	reducers: {
		changeState: (state, action) => {
			state[action.payload.name] = action.payload.value;
		},
	},
});

export const { changeState, clearState } = resumeSlice.actions;

export default resumeSlice.reducer;
