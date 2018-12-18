import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { changeMenu } from '../actions/index'

const mapStateToProps = state => {
	console.log('Sidebar:', state.sidebar)

	return {
		menu: state.sidebar.menu,
		activo: state.sidebar.activo
	}
}
const mapDispatchToProps = dispatch => {
	return {
		changeMenu: idActivo => dispatch(changeMenu(idActivo))
	}
}
class ConnectedSidebar extends Component {
	constructor() {
		super()
		this.handleChangeMenu = this.handleChangeMenu.bind(this)
	}
	handleChangeMenu(e) {
		console.log(e.currentTarget.attributes['id-menu'].value)
		const idMenu = Number(e.currentTarget.attributes['id-menu'].value)
		this.props.changeMenu(idMenu)
	}
	render() {
		return (
			<div className="sidebar">
				<ul>
					{/* <li>
						<a>
							<FontAwesomeIcon icon="book" size="sm" /> <span>Cuentas</span>
						</a>
					</li>
					<li>
						<a>
							<FontAwesomeIcon icon="list-alt" size="sm" /> <span>Categorías</span>
						</a>
					</li> */}
					{this.props.menu.map(item => {
						console.log(item.id, ' === ', this.props.activo)

						if (item.id === this.props.activo) {
							return (
								<li className="active" key={item.id}>
									<a onClick={this.handleChangeMenu} id-menu={item.id}>
										<FontAwesomeIcon icon={item.icon} size="sm" /> <span>{item.name}</span>
									</a>
								</li>
							)
						} else {
							return (
								<li key={item.id}>
									<a onClick={this.handleChangeMenu} id-menu={item.id}>
										<FontAwesomeIcon icon={item.icon} size="sm" /> <span>{item.name}</span>
									</a>
								</li>
							)
						}
					})}
				</ul>
			</div>
		)
	}
}

const Sidebar = connect(
	mapStateToProps,
	mapDispatchToProps
)(ConnectedSidebar)

export default Sidebar
