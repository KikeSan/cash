import React, { Component } from 'react'
import Header from './containers/Header'
import Sidebar from './containers/Sidebar'
import Body from './containers/Body'
import Footer from './containers/Footer'
import Categories from './containers/Categories'
import { connect } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faChevronLeft, faChevronRight, faHeart, faUser, faBook, faListAlt, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import '../node_modules/bootstrap/scss/bootstrap.scss'
import './styles/index.scss'

library.add(faTasks, faChevronLeft, faChevronRight, fab, faHeart, faUser, faBook, faListAlt, faPlusCircle)

const mapStateToProps = state => {
	return {
		activo: state.sidebar.activo
	}
}

class App extends Component {
	render() {
		const verify = this.props.activo
		return (
			<div className="wrapper">
				<Header />
				<div className="content">
					<Sidebar />
					{verify === 0 ? <Body /> : <Categories />}
				</div>
				<Footer />
			</div>
		)
	}
}

const AppConnect = connect(
	mapStateToProps,
	null
)(App)

export default AppConnect
