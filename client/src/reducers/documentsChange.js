import {DOCUMENTS_CHANGE_TITLE, DOCUMENTS_CHANGE_URI} from '../actions';

const initalState = {
	title: '',
	uri: '',
	saved: false
};

export default function documentsChange(state =initalState, action) {
 	switch (action.type) {
		default: 
			return state;
		case DOCUMENTS_CHANGE_TITLE:
				return Object.assign({}, state, {
				title: action.title
			});
		case DOCUMENTS_CHANGE_URI:
				return Object.assign({}, state, {
				uri: action.uri
			});
	}
}
