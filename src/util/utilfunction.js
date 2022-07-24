import { Submit } from './function';

import { store } from '../Store/Store';

import { addCart } from '../Store/cartSlice/cartslice';

export const addToCart = async (id) => {
	const cart = await store.getState().cart.cart;
	if (cart.includes(id)) {
		return 'already in cart';
	} else {
		store.dispatch(addCart([ id ]));
		return 'added to cart';
	}
};
