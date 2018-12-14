import {} from '../actions/action-types'

const initialState = {
  user:'kike',
  pass:'manager',
  rol:'admin'
}

const login = (state=initialState,action)=>{
  switch (action.type) {
    case LOGIN:
      return{
        ...state
      }
  
    default:
      return state
  }
}

export default login