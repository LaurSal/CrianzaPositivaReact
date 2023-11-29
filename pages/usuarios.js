import React from 'react';

import UserTable from '../components/usertable/UserTable.jsx'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Usuarios() {
  return (
    <div>

      <h1>Gestionar usuarios</h1>
      <UserTable />

    </div>
  );
}

export default Usuarios;
