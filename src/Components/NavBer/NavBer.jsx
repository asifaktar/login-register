import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBer = () => {

    const link = <>
        <NavLink to="/">Home</NavLink>
        <NavLink to= "/Register">Register</NavLink>
        <NavLink to= "/SignUp">SignUp</NavLink>
        <NavLink to= "/Login">Login</NavLink>
    </>
                 
    
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Firebase Project</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu gap-4 menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    );
};

export default NavBer;