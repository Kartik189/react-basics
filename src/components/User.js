import React , {Component } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {

    var {id} = useParams();

    return(
        <div>
            <h3>The User Page</h3>
            <p>User ID: {id}</p>
        </div>
    );
}

export default User;