// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainDashBoard from './pages/MainDashBoardPage';
import ProfilePage from './pages/ProfilePage';
import TableStandings from './pages/TableStandingsPage';
import WelcomePage from './pages/WelcomePage';
import History from "./pages/HistoryPage";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <Router>
      <div 
      // style={{ padding: "00px"}}
      >
        <Routes>
          <Route path="/" element= {<WelcomePage />} />
          <Route path ="/tableStandings" element={<TableStandings /> }/>
          <Route path = "/MyProfile" element={<ProfilePage />} />
          <Route path = "/mainDashBoard" element={<MainDashBoard />} />
          <Route path = "/history" element = {<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
