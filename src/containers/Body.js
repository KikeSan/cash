import React, { Component } from 'react'
import {connect} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const mapStateToProps = state => {
	console.log('cuentas --- ',state.cuentas.cuentas);
	
	return{
		cuentas: state.cuentas.cuentas
	}
}

class Body extends Component {
	constructor(){
		super()
		this.state = {
			activo:'001'
		}
	}
	render() {
		return (
			<div className="main-body">
				<div className="container-fluid">
						<div className="wrapperCuentas">
							<div className="headerSeccion">
								<span>Cuentas</span>
								<a className="btn" onClick={this.handleToogleModal}>
									<FontAwesomeIcon icon="plus-circle" size="sm" />
									<span>Nuevo</span>
								</a>
							</div>
							<div className="cuentas-list">
								{this.props.cuentas.map(cta=>{
									return(
										<a className={this.state===cta.id?"cuentas-item item-activo":"cuentas-item"} key={cta.id}>
											<h4 className="cuentas-item__nombre">{cta.nombre}</h4>
											<span className="cuentas-item__badge badge">{cta.tipo}</span>
											<span className="cuentas-item__monto">S/{cta.monto}</span>
											<span className="cuentas-item__fecha">{cta.fecha}</span>
										</a>
									)
								})}
							</div>
						</div>
						<div className="wrapperDetalle">Body</div>
					</div>
			</div>
		)
	}
}

const bodyConnect = connect(mapStateToProps)(Body)

export default bodyConnect
