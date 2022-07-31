import React from 'react';
import { Route , Navigate} from 'react-router-dom';
import Users from '../components/Users';

export const PrivateRoute = ({ element:Element,loggedIn, ...rest }) => {
   return ( 
    loggedIn ? <Route {...rest} element={<Users />}/> : 
                    <Navigate  to="/"/>
        )
                
}