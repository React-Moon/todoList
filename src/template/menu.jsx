import React from 'react'

export default props => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* Logo menu */}
        <a className="navbar-brand" href="#todo">
            <i className="fa fa-calendar-check-o" ></i> 
            TodoApp
        </a>
        {/* menu body */}
        <div>
            <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#todos" >Todo</a>  
                </li>
                <li className="nav-item" >
                    <a className="nav-link" href="#About">About</a>
                </li>
            </ul>
        </div>
    </nav>






    
)