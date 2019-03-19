import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {onLogoutUser} from '../actions'


class Header extends Component{
    render(){
        const {user} = this.props

        if(user.username === ''){
        return(
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark" id="main-nav">
                    <div className="container">
                        <Link to="/" className="navbar-brand">WELCOME</Link>
                        <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link"><i className="fa fa-fw fa-home"></i>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="#home" className="nav-link" data-toggle="modal" data-target="#contactModal"><i class="fa fa-product-hunt" aria-hidden="true"></i> Our Products</a>
                                </li>
                                <li className="nav-item">
                                    <Link to="/login" className="nav-link"><i className="fa fa-sign-in"></i> Log In</Link>
                                </li>
                                <li className="nav-item">
                                    <a href="#explore-head-section" className="nav-link"><i class="fa fa-registered" aria-hidden="true"></i> Register</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        )
        }else {
            return(
                <div>
                    {/* <Redirect to="/"/> */}
                    <nav className="navbar navbar-expand-sm bg-dark navbar-dark" id="main-nav">
                        <div className="container">
                            <Link to="/" className="navbar-brand">WELCOME {user.username}</Link>
                            <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link"><i className="fa fa-fw fa-home"></i> Home</Link>
                                    </li>
                                    <li className="nav-item">
                                         <Link to="/" className="nav-link" onClick={this.props.onLogoutUser}><i class="fa fa-sign-out" aria-hidden="true"></i> Logout</Link>
                                    </li>
                                    <li className="nav-item dropdown mt-2">
                                    <Link to="/asd" className="nav-link dropdown-toggle" data-toggle="dropdown">Products Data</Link>
                                    <div className="dropdown-menu">
                                        <Link to="/" className="dropdown-item">Manage Product</Link>
                                        <Link to="/" className="dropdown-item">See Product</Link>
                                    </div>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>
                    </nav>
    
                </div>
            )
        }    
    }
}

const mapStateToProps = state => {
    return {user: state.auth}
}

export default connect(mapStateToProps, {onLogoutUser})(Header)