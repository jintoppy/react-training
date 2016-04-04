import {dispatch, register} from '../dispatchers/app-dispatcher';
import AppConstants from '../constants/app-constants';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

var users = [
	{
		name: "user1",
		age: 10
	},
	{
		name: "user2",
		age: 20
	}
];

const _addItem = function(item){
	users.push(item);
}

const UserStore = Object.assign(EventEmitter.prototype, {
	emitChange(){
		this.emit(CHANGE_EVENT)
	},
	addChangeListener(callback){
		this.on(CHANGE_EVENT, callback)
	},
	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT, callback)
	},
	getUsers(){
		return users;
	},
	dispatcherIndex: register(function(action){
		switch(action.actionType){
			case AppConstants.ADD_ITEM:
				_addItem(action.item);
				break;
		}
		UserStore.emitChange();
	})
});
export default UserStore;