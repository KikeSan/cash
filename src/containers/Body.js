import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Body extends Component {
	render() {
		return (
			<div className="main-body">
				<div className="container-fluid">
					<div className="row">
						<div className="col-2">
							<div className="headerSeccion">
								<span>Cuentas</span>
								<a className="btn" onClick={this.handleToogleModal}>
									<FontAwesomeIcon icon="plus-circle" size="sm" />
									<span>Nuevo</span>
								</a>
							</div>
							<div className="cuentas-list" />
						</div>
						<div className="col-10">Body</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Body
