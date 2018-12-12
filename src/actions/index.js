export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const CREDIT = 'CREDIT'

export const increment = () => {
  return {
    type: INCREMENT,
  }
}

export const decrement = () => {
  return {
    type: DECREMENT,
  }
}

export const initCredit = () => ({
  type: CREDIT,
})