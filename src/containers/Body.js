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
		this.changeCuenta = this.changeCuenta.bind(this)
	}
	changeCuenta(e){
		const id = e.currentTarget.attributes['id'].value
		this.setState({
			activo:id
		})
	}
	render() {
		return (
			<div className="main-body">
				<div className="container-fluid">
						<div className="wrapperCuentas">
							<div className="headerSeccion">
								<span>Cuentas</span>
								<a className="btn btn-primary" onClick={this.handleToogleModal}>
									<FontAwesomeIcon icon="plus-circle" size="sm" />
									<span>Nuevo</span>
								</a>
							</div>
							<div className="cuentas-list">
								{this.props.cuentas.map(cta=>{
									return(
										<a className={this.state.activo===cta.id?"cuentas-item item-activo":"cuentas-item"} key={cta.id} id={cta.id} onClick={this.changeCuenta}>
											<h4 className="cuentas-item__nombre">{cta.nombre}</h4>
											<span className={"cuentas-item__badge badge cuentas-item__badge--"+cta.tipo.toLowerCase()}>{cta.tipo}</span>
											<span className="cuentas-item__monto">S/{cta.monto}</span>
											<span className="cuentas-item__fecha">{cta.fecha}</span>
										</a>
									)
								})}
							</div>
						</div>
							{this.props.cuentas.map(data => {
								if(data.id===this.state.activo){
									return (
										<div className="wrapperDetalle" key={data.id}>
											<div className="panel-header">
												<h3>{data.nombre}</h3>
												<div className="btn-group">
													<button type="button" className="btn btn-outline-secondary"><FontAwesomeIcon icon="plus-circle" size="sm" /> Agregar transacción</button>
													<button type="button" className="btn btn-outline-secondary"><FontAwesomeIcon icon="edit" size="sm" /> Editar cuenta</button>
												</div>
											</div>
											<div className="panel-body">hola</div>
										</div>
										)
									}
							})}
							

					</div>
			</div>
		)
	}
}

const bodyConnect = connect(mapStateToProps)(Body)

export default bodyConnect
