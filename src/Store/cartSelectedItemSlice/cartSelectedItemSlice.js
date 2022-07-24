import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartSelectedItem: []
};

export const CartSelectedSlice = createSlice({
	name: 'selectedItem',
	initialState,
	reducers: {
		addItem: (state, action) => {
			//console.log('action = ' + action, state);
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			// console.log('red=', action.payload);
			//console.log('cart', state, action);
			state.selectedItem = [ ...state.selectedItem, action.payload ];
			// if (state.messageArray[action.payload.roomId]) {user
			// 	state.messageArray[action.payload.roomId].push(action.payload);
			// } else {
			// 	state.messageArray[action.payload.roomId] = [ action.payload ];
			// }
		},
		removeItem: (state, action) => {
			state.selectedItem = state.selectedItem.filter((item) => item.id !== action.payload.id);
		}
	}
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = CartSelectedSlice.actions;

export default CartSelectedSlice.reducer;
