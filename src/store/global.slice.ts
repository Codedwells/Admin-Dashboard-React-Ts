import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type User = {
	name?: string;
	isLoggedIn: boolean;
};

interface globalStateInterface {
	doRefresh: boolean;
	user: User;
}

const initialGlobalState: globalStateInterface = {
	doRefresh: false,
	user: { isLoggedIn: false },
};

const globalSlice = createSlice({
	name: 'globalState',
	initialState: initialGlobalState,
	reducers: {
		setRefresh(state, action: PayloadAction<User>) {
			state.doRefresh = action.payload.isLoggedIn;
		},
		setLogged(state, action: PayloadAction<User>) {
			state.user.name = action.payload.name;
			state.user.isLoggedIn = action.payload.isLoggedIn;
		},
	},
});

export default globalSlice;
