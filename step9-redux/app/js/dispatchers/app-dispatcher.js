import { Dispatcher } from 'flux';

const flux = new Dispatcher();

export function register(callback){
	return flux.register(callback);
}

export function dispatch(action){
	console.log("inside dispatch");
	console.log(action);
	flux.dispatch(action);
}