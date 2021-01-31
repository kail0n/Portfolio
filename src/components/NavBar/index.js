import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class NavBar extends Component {
    render() {     
        return(
            <>
            <NavLink to='/' activeClassName='current'>Home</NavLink>
            <NavLink to='/about' activeClassName='current'>About</NavLink>
            <NavLink to='projects' activeClassName='current'>Projects</NavLink>
            <button onClick={this.props.history.goBack}>Back</button>
            </>
    )
    }
}

export default withRouter(NavBar)