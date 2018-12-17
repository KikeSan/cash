import { CHANGE_MENU } from '../actions/action-types'

const initialState = {
	menu: [
		{
			name: 'Cuentas',
			icon: 'book',
			id: 0
		},
		{
			name: 'Categorías',
			icon: 'list-alt',
			id: 1
		}
	],
	activo: 0
}

const sidebarReducer = (state = initialState, action) => {
	switch (action.type) {
		case CHANGE_MENU:
			return {
				...state,
				activo: action.payload
			}

		default:
			console.log('Reducer default: ', state.menu)

			return state
	}
}

export default sidebarReducer
