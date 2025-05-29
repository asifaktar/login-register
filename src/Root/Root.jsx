import React from 'react';
import NavBer from '../Components/NavBer/Navber';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;