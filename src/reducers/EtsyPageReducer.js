
const initialState = {
	items: []
}

export default function(state = initialState, action) {
	switch(action.type) {
		case 'GET_ITEMS':
			return {items:[...state.items, action.items]}
			default:
				return state
	}
}