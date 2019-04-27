import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Link} from "react-router-dom";

class Nav extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <NavLink className="navbar-brand js-scroll-trigger" to="/home" activeClassName="chon">REACT ROUTER - NEWS</NavLink>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                        <NavLink className="nav-NavLink js-scroll-trigger" to="/tintuc">Tin tức</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-NavLink js-scroll-trigger" to="/chitiet">Tin chi tiết</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-NavLink js-scroll-trigger" to="/contact">Liên hệ</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        );
    }
}

export default Nav;