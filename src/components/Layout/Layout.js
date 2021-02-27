import React from 'react';
import AppBar from './components/AppBar';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <h2>left sidebar</h2>
      {children}
    </>
  );
};

export default Layout;
