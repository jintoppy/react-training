import AppConstants from '../constants/app-constants';

export default{
	addItem: (item)=>{
		return {
			type: AppConstants.ADD_ITEM,
			item
		}
	} 
}