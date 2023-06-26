import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';
import Home from './components/Page/Home'
import Login from './components/Page/Login'
import Project from './components/Page/Project'
import Navbar from './components/Navigation/Navbar'
import LowerPart from "./components/Page/Project/LowerPart";

import SpecificPage from "./components/Page/SpecificPage";
import PageNotFound from './components/Page/PageNotFound'
import Ideas from "./components/Page/Ideas";
import Users from "./components/Page/Users";
import Registrattion from "./components/Page/Registrattion";

function App() {
  return (
    <div>
      {/* <div> <Home /></div> */}
      <Navbar/>
    

      <Router>
        <Navbar/>
       <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/project' element={<Project />} />
      <Route path='/login' element={<Login />} />
      <Route path='/project/:projectname/id=:p_id/' element={<SpecificPage />} />
      <Route path='/ideas' element={<Ideas />} />
      <Route path='/users' element={<Users />} />
      {/* <Route path='/registrattion' element={<Registrattion/>} /> */}
      <Route path='*' element={<PageNotFound />} />
    </Routes>
      </Router>

      {/* <ToastContainer position="top-center"/>

      <LowerPart /> */}
   
    </div>
  );
}

export default App;
