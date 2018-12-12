import { CREDIT } from '../actions'
const initialState = 'kike'

const credit = (state = initialState, action) => {
  switch (action.type) {
    case CREDIT:
      return 'develop by ' + state
    default:
      return 'develop by ' + state
  }
}

export default credit