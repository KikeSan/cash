import { combineReducers } from 'redux'
import counter from './counter'
import credit from './credits'
import categorias from './categorias'
import sidebar from './sidebar'

const reducers = combineReducers({
	sidebar,
	categorias,
	credit
})

export default reducers
