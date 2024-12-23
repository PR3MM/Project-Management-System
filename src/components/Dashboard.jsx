// Dashboard.jsx
import React from 'react';
import Tasks from './Tasks';
import Header from './Header';
import ProgressContext from '../Context/ProgressContext';  

const Dashboard = () => {
  return (
    <div>
      <ProgressContext> 
        <Header />
        <Tasks />
      </ProgressContext>
    </div>
  );
};

export default Dashboard;
