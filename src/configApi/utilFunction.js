import { addCategory } from '../Store/categorySlice/categorySlice';
import { Submit } from './function';
import { useDispatch } from 'react-redux';
import { store } from '../Store/Store';
import { addUser } from '../Store/userSlice/userSlice';

export const getCategory = async () => {
	try {
		const res = await Submit({}, '/category/', 'get');

		//const dispatch = useDispatch();
		store.dispatch(addCategory(res.data.result));
	} catch (err) {
		console.log(err);
		return err;
	}
};

export const getUserDetails = async () => {
	try {
		const res = await Submit({}, '/user/getuser', 'get');

		//const dispatch = useDispatch();
		if (res) store.dispatch(addUser(res.data));
	} catch (err) {
		console.log(err);
		return err;
	}
};
