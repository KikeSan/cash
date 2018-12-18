import { ADD_CATEGORY, EDIT_CATEGORY, REMOVE_CATEGORY } from '../actions/action-types'

const initialState = {
	categories: [
		{
			id: 101,
			name: 'Alimentación'
		},
		{
			id: 102,
			name: 'Educación'
		},
		{
			id: 103,
			name: 'Gastos de personal'
		},
		{
			id: 104,
			name: 'Gastos de vehículos'
		},
		{
			id: 105,
			name: 'Gastos fijos'
		},
		{
			id: 106,
			name: 'Infraestructura y mantenimiento'
		},
		{
			id: 107,
			name: 'Materiales e insumos'
		},
		{
			id: 108,
			name: 'Salud y bienestar'
		}
	],
	customCategories: []
}

const category = (state = initialState, action) => {
	switch (action.type) {
		case ADD_CATEGORY:
			return {
				...state,
				//categories:state.categories,
				customCategories: state.customCategories.concat(action.payload)
			}
		//case EDIT_CATEGORY:

		default:
			return state
	}
}

export default category
