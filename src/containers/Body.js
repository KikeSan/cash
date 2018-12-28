import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tabs from "../components/Tabs";

const mapStateToProps = state => {
	console.log("cuentas --- ", state.cuentas.cuentas);

	return {
		cuentas: state.cuentas.cuentas
	};
};

class Body extends Component {
	constructor() {
		super();
		this.state = {
			activo: "001"
		};
		this.changeCuenta = this.changeCuenta.bind(this);
	}
	changeCuenta(e) {
		const id = e.currentTarget.attributes["id"].value;
		this.setState({
			activo: id
		});
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
							{this.props.cuentas.map(cta => {
								return (
									<a className={this.state.activo === cta.id ? "cuentas-item item-activo" : "cuentas-item"} key={cta.id} id={cta.id} onClick={this.changeCuenta}>
										<h4 className="cuentas-item__nombre">{cta.nombre}</h4>
										<span className={"cuentas-item__badge badge cuentas-item__badge--" + cta.tipo.toLowerCase()}>{cta.tipo}</span>
										<span className="cuentas-item__monto">S/{cta.monto}</span>
										<span className="cuentas-item__fecha">{cta.fecha}</span>
									</a>
								);
							})}
						</div>
					</div>
					{this.props.cuentas.map(data => {
						if (data.id === this.state.activo) {
							return (
								<div className="wrapperDetalle" key={data.id}>
									<div className="panel-header">
										<h3>{data.nombre}</h3>
										<div className="btn-group">
											<button type="button" className="btn btn-outline-secondary">
												<FontAwesomeIcon icon="plus-circle" size="sm" /> Agregar transacción
											</button>
											<button type="button" className="btn btn-outline-secondary">
												<FontAwesomeIcon icon="edit" size="sm" /> Editar cuenta
											</button>
										</div>
									</div>
									<div className="panel-body">
										<Tabs>
											<div label="Transacciones">
												<div className="container-fluid">
													<div className="row">
														<div className="col">
															<p className="tx-title">Monto disponible</p>
															<p className="tx-description tx-description--purple">
																S/
																{data.transacciones.reduce((acc, currValue) => {
																	if (currValue.tipoTx === "ingreso") {
																		return acc + currValue.importe;
																	} else {
																		return acc - currValue.importe;
																	}
																}, 0)}
															</p>
														</div>
														<div className="col">
															<p className="tx-title">Monto apertura</p>
															<p className="tx-description tx-description--purple">S/{data.apertura}</p>
														</div>
														<div className="col">
															<p className="tx-title">Total gastos</p>
															<p className="tx-description tx-description--red">S/{data.transacciones.filter(item => (item.tipoTx === "egreso" ? item.importe : null)).reduce((acc, currValue) => acc + currValue.importe, 0)}</p>
														</div>
														<div className="col">
															<p className="tx-title">Total ingresos</p>
															<p className="tx-description tx-description--green">S/{data.transacciones.filter(item => (item.tipoTx === "ingreso" ? item.importe : null)).reduce((acc, currValue) => acc + currValue.importe, 0)}</p>
														</div>
													</div>
													<div className="row">
														<div className="col">
															<table className="table table-striped table-bordered table-sm table-hover">
																<thead>
																	<tr>
																		<th className="table-head">Nº</th>
																		<th className="table-head">Tipo</th>
																		<th className="table-head">Fecha</th>
																		<th className="table-head">Categoría</th>
																		<th className="table-head">Comprobante</th>
																		<th className="table-head">Usuario</th>
																		<th className="table-head">Estado</th>
																		<th className="table-head">Importe</th>
																	</tr>
																</thead>
																<tbody>
																	{data.transacciones.map(tx => {
																		return (
																			<tr key={tx.id}>
																				<th className="table-cell">{tx.id}</th>
																				<td className="table-cell">
																					<span className={tx.tipoTx === "egreso" ? "bullet bullet--red" : "bullet bullet--green"} />
																					{tx.tipoTx}
																				</td>
																				<td className="table-cell">{tx.fecha}</td>
																				<td className="table-cell">{tx.categoria}</td>
																				<td className="table-cell">{tx.comprobante}</td>
																				<td className="table-cell">{tx.usuario}</td>
																				<td className="table-cell">
																					<div className={tx.estado === "pendiente" ? "badge badge--red" : "badge badge--purple"}>{tx.estado}</div>
																				</td>
																				<td className="table-cell">
																					{tx.tipoTx === "ingreso" ? "+" : "-"}S/{tx.importe}
																				</td>
																			</tr>
																		);
																	})}
																</tbody>
															</table>
														</div>
													</div>
												</div>
											</div>
											<div label="Información">
												After &apos;while, <em>Crocodile</em>!
											</div>
											<div label="Compartir">
												Nothing to see here, this tab is <em>extinct</em>!
											</div>
										</Tabs>
									</div>
								</div>
							);
						}
					})}
				</div>
			</div>
		);
	}
}

const bodyConnect = connect(mapStateToProps)(Body);

export default bodyConnect;
