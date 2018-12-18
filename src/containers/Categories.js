import React, {Component} from 'react'

class Categories extends Component{
  render(){
    return (
      <div className="main-Categ">
        <div className="header">
          <span>Categorías</span> <a className="btn">Nuevo</a>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <h3>Categorías establecidas</h3>
            </div>
            <div className="col">
              <h3>Mis Categorías</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Categories