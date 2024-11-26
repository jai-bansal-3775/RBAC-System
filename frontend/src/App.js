import React from 'react';
import UserManagement from './components/UserManagement';
import RoleManagement from './components/RoleManagement';
import Header from './components/Header';
const App = () => {
  return (
    <div>
      <Header />
      <UserManagement />
      <RoleManagement />
    </div>
  );
};

export default App;
