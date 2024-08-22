import { createSlice } from '@reduxjs/toolkit';

let initialState = {
	sentEmail: {
		email: '',
		forgotPassword: false,
	},
	getMe: {},
	userData: {},
	hrData: {},
	live_coding_data: {
		code: '',
		lang: {},
		selectedLang: '',
	},
	chatElements: [],
	refetchStart: () => {},
};

const generelSlice = createSlice({
	name: 'generel',
	initialState,
	reducers: {
		changeState: (state, action) => {
			state[action.payload.name] = action.payload.value;
		},
		clearState: (state) => {
			state = {
				...state,
				chatElements: [],
				live_coding_data: {
					code: '',
					lang: {},
					selectedLang: '',
				},
			};
		},
	},
});

export const { changeState, clearState } = generelSlice.actions;

export default generelSlice.reducer;
