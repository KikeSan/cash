import { combineReducers } from 'redux'
import counter from './counter'
import credit from './credits'
import categorias from './categorias'
import sidebar from './sidebar'
import cuentas from './cuentas'

const reducers = combineReducers({
	sidebar,
	categorias,
	cuentas
})

export default reducers
