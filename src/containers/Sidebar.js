import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { changeMenu } from '../actions/index'

const mapStateToProps = state => {
	console.log('Sidebar:' + state)

	return {
		menu: state.menu,
		activo: state.activo
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
						if (item.id === this.props.activo) {
							return (
								<li className="active">
									<a>
										<FontAwesomeIcon icon={item.icon} size="sm" /> <span>{item.name}</span>
									</a>
								</li>
							)
						} else {
							return (
								<li>
									<a>
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
