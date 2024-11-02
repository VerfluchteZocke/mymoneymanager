import {React, useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './logo.svg';
import './App.css';
import EarningsLineChart from './components/EarningsLineChart';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import OverviewPage from './components/overview/OverviewPage';
import IncomePage from './components/income/IncomePage';
import ExpendituresPage from './components/expenditures/ExpendituresPage';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
function App() {

  return (
    <Router>
    <div className="App">
      <ResponsiveAppBar />
      <Routes>
      <Route path="/" element={<OverviewPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/income" element={<IncomePage />} />
        <Route path="/expenditures" element={<ExpendituresPage />} />
      </Routes>
        {/* <EarningsLineChart /> */}
    </div>
    </Router>
  );
}

export default App;
