import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = (props) => {
        return(
            <nav>
                <div>
                    <NavLink to={'/home'} activeStyle={{color: 'red'}}>Home</NavLink>
                    <NavLink to={'/user/10235'} activeStyle={{color: 'red'}}>User</NavLink>
                </div>
            </nav>
        );
}

export default Header;