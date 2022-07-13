import { addCategory } from '../Store/categorySlice/categorySlice';
import { Submit } from './function';
import { useDispatch } from 'react-redux';
import { store } from '../Store/Store';

export const getCategory = async () => {
	try {
		const res = await Submit({}, '/category/', 'get');
		console.log(res.data);
		//const dispatch = useDispatch();
		store.dispatch(addCategory(res.data.result));
	} catch (err) {
		console.log(err);
		return err;
	}
};
