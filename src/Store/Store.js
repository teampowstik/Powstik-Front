import { configureStore } from '@reduxjs/toolkit';

import messageReducer from './messageSlice/MessageSlice';
import userReducer from './userSlice/userSlice';
import productReducer from './productSlice/productSlice';
export const store = configureStore({
	reducer: {
		message: messageReducer,
		user: userReducer,
		product: productReducer
	}
});
