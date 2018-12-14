import React, { Component } from 'react'
import Header from './containers/Header'
import Sidebar from './containers/Sidebar'
import Body from './containers/Body'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faChevronLeft, faChevronRight, faHeart, faUser } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './styles/index.scss'

library.add(faTasks, faChevronLeft, faChevronRight, fab, faHeart, faUser)

class App extends Component {

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Sidebar />
          <Body />
        </div>
        <footer className="container-fluid credits text-center">
          <FontAwesomeIcon icon="chevron-left" />
          <FontAwesomeIcon icon="chevron-right" />
          <span className="credit-text">with</span>
          <FontAwesomeIcon icon="heart" />
          <span className="credit-text">and</span>
          <FontAwesomeIcon icon={['fab', 'react']} size="lg" />
          <span className="credit-text">by Kike</span>
        </footer>
      </div>
    )
  }
}

export default App