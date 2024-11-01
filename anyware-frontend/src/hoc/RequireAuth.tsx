import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

interface RequiredAuthProps {
  component: React.ComponentType;
}

const RequiredAuth: React.FC<RequiredAuthProps> = ({ component: Component }) => {
  const accessToken = Cookies.get('accessToken');


  if (!accessToken) {
    return <Navigate to="/sign-in" />;
  }

  return <Component />;
};

export default RequiredAuth;
