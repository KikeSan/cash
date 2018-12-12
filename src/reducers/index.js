import { combineReducers } from 'redux'
import counter from './counter'
import credit from './credits'

const reducers = combineReducers({
  counter,
  credit
})

export default reducers