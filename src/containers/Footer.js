import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render(){
    return(
      <footer className="container-fluid credits text-center">
        <div className="hover-color">
          <FontAwesomeIcon icon="chevron-left" />
          <FontAwesomeIcon icon="chevron-right" />
          <span className="credit-text">with</span>
          <FontAwesomeIcon icon="heart" />
          <span className="credit-text">and</span>
          <FontAwesomeIcon icon={['fab', 'react']} size="lg" />
          <span className="credit-text">by Kike</span>
        </div>
      </footer>
    )
  }
}

export default Footer