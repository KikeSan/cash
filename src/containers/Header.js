import React,{Component} from 'react'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import logo from '../images/logoBlue.svg'

class Header extends Component{
  render(){
    return(
      <header>
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img src={logo} width="30" height="30" alt=""/>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <span className="navbar-text">Admin</span>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <FontAwesomeIcon icon="user" size="sm" /><span className="userName">Kike</span>
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Cerrar Sesión</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>     
    )
  }
}

export default Header