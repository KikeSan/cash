import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { increment, decrement, initCredit } from '../actions'
import Button from '../components/button'

class Counter extends Component {
  render() {
    const { counter, credit, increment, decrement } = this.props
    return (
      <div>
        <h1>{counter}</h1>
        <Button primary handleClick={increment}>Increment</Button>
        <Button error handleClick={decrement}>Decrement</Button>
        <Button>Do nothing</Button>
        <p>{credit}</p>
      </div>
    )
  }
}

const mapStateToProps = ({ counter, credit }) => {
  return {
    counter,
    credit
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ increment, decrement, initCredit }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)