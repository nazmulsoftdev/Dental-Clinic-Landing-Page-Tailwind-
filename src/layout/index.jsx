import React from 'react';
import {Outlet} from 'react-router-dom';
import NavSection from '../components/NavBar';


function Layout() {
  return (
    <>
      <NavSection />
        <Outlet />
    </>
  );
}

export default Layout;