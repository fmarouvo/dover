import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import React, {Fragment} from 'react';
import Navbar from './Core/Navbar';
import logo from './logo.svg';
import './App.css';
import Home from './Views/Home';
import Contentful from './Views/Contentful';

function App() {
  return (
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
          {/* Corrigindo os caminhos das rotas */}
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/contentful' element={<Contentful/>}/>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;