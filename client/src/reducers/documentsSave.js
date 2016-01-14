import {DOCUMENTS_SAVE_REQUEST, DOCUMENTS_SAVE_SUCCESS, DOCUMENTS_SAVE_FAILURE} from '../actions';

const initalState = {
	saved: false
};

export default function documentsSave(state = initalState, action) {
	switch (action.type) {
		default: 
			return state;
		case DOCUMENTS_SAVE_REQUEST:
				return Object.assign({}, state, {
				saved: false
			});
		case DOCUMENTS_SAVE_SUCCESS:
				return Object.assign({}, state, {
				saved: true,
				data: action.data
			});
		case DOCUMENTS_SAVE_FAILURE:
				return Object.assign({}, state, {
				saved: false,
				data: action.data
			});
	}
}