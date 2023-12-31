import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MyRoutes from './Components/routes';

import './App.css';

const App = () => {

  return (
    <Router>
      <MyRoutes/>
    </Router>
  );
};

export default App;
