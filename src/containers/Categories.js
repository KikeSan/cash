import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { uniqueId } from 'lodash'

import { connect } from 'react-redux'
import { addCategory } from '../actions/index'

const mapStateToProps = state => {
	return {
		categories: state.categorias.categories,
		customCategories: state.categorias.customCategories
	}
}
const mapDispatchToProps = dispatch => {
	return {
		addCategory: categ => dispatch(addCategory(categ))
	}
}

class Categories extends Component {
	constructor() {
		super()
		this.state = {
			onModal: false,
			newCategoryName: ''
		}
		this.handleAddCategory = this.handleAddCategory.bind(this)
		this.handleToogleModal = this.handleToogleModal.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(e) {
		this.setState({
			newCategoryName: e.target.value
		})
	}
	handleAddCategory(e) {
		e.preventDefault()
		const id = uniqueId(),
			name = this.state.newCategoryName
		this.props.addCategory({ id, name })
		this.setState({
			onModal: false,
			newCategoryName: ''
		})
	}
	handleToogleModal() {
		this.setState({
			onModal: !this.state.onModal
		})
	}
	render() {
		return (
			<div className="main-Categ">
				<div className="header">
					<span>Categorías</span>
					<a className="btn" onClick={this.handleToogleModal}>
						<FontAwesomeIcon icon="plus-circle" size="sm" />
						<span>Nuevo</span>
					</a>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div className="col">
							<h5>Categorías establecidas</h5>
							<table className="table table-striped table-bordered table-sm">
								<thead>
									<tr>
										<th scope="col">Nº</th>
										<th scope="col">Nombre de categoría</th>
									</tr>
								</thead>
								<tbody>
									{this.props.categories.map(cat => {
										return (
											<tr key={cat.id}>
												<th scope="row">{cat.id}</th>
												<td>{cat.name}</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
						<div className="col">
							<h5>Mis Categorías</h5>
							<table className="table table-striped table-bordered table-sm">
								<thead>
									<tr>
										<th scope="col">Nº</th>
										<th scope="col">Nombre de categoría</th>
									</tr>
								</thead>
								<tbody>
									{this.props.customCategories.map(cat => {
										return (
											<tr key={cat.id}>
												<th scope="row">{cat.id}</th>
												<td>{cat.name}</td>
											</tr>
										)
									})}
								</tbody>
							</table>
						</div>
					</div>
				</div>

				<div className={this.state.onModal ? 'modal fade show onModal' : 'modal fade show'} /* "modal fade show" */ tabIndex="-1" role="dialog" id="exampleModal">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">Nueva categoría</h5>
								<button type="button" className="close" onClick={this.handleToogleModal}>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<div className="form-group">
									<label htmlFor="nameCat">Nombre de la categoría *</label>
									<input type="text" className="form-control" id="nameCat" onChange={this.handleChange} value={this.state.newCategoryName} />
								</div>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" onClick={this.handleToogleModal}>
									Cancelar
								</button>
								<button type="button" className="btn btn-primary" onClick={this.handleAddCategory}>
									Aceptar
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
const cat = connect(
	mapStateToProps,
	mapDispatchToProps
)(Categories)
export default cat
