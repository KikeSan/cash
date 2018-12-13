import { combineReducers } from 'redux'
import counter from './counter'
import credit from './credits'
import categorias from './categorias'

const reducers = combineReducers({
  credit,
  categorias
})

export default reducers