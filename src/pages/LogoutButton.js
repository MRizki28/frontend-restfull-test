import React from 'react';
import { useHistory } from 'react-router-dom';

const LogoutButton = () => {
  let history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  };

  return (
    <button className="btn btn-danger" onClick={logout}>
      Logout
    </button>
  );
};

export default LogoutButton;
