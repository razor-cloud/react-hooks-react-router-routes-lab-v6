import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar'; // Adjust the path if necessary

const Layout = () => (
  <div>
    <NavBar />
    <main>
      <Outlet /> 
    </main>
  </div>
);

export default Layout;