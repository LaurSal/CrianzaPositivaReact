import React from 'react';
import Navbar from '../components/navbar/Navbar.jsx'
import UserTable from '../components/usertable/UserTable.jsx'
import Footer from '../components/footer/Footer.jsx'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Usuarios() {
  return (
    <div>
      <Navbar />
      <h1>Gestionar usuarios</h1>
      <UserTable />
      <Footer />
    </div>
  );
}

export default Usuarios;
