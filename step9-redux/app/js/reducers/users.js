import AppConstants from '../constants/app-constants';

const _addItem = function(state, item){
	return [
		...state,
		item
	];
}

const initialState = [
	{
		name: "user1",
		age: 10
	},
	{
		name: "user2",
		age: 20
	}
];

const users = (state = initialState, action) => {
	switch(action.type){
		case AppConstants.ADD_ITEM:
			return _addItem(state,action.item);
		break;
		default:
		return state;
	}
}

export default users;