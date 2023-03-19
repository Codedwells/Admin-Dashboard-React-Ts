import { configureStore } from '@reduxjs/toolkit';
import globalSlice from './global.slice';

const store = configureStore({
	reducer: {
		globalState: globalSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
